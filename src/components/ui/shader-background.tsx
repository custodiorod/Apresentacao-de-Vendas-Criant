"use client";

import React, { useRef, useEffect } from 'react';

const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rendererRef = useRef<any>(null);

  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null = null;
    private vs: WebGLShader | null = null;
    private fs: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private scale: number;

    private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    constructor(canvas: HTMLCanvasElement, scale: number) {
      this.canvas = canvas;
      this.scale = scale;
      this.gl = canvas.getContext('webgl2') as any;
      this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
    }

    compile(shader: WebGLShader, source: string) {
      if (!shader) return;
      const gl = this.gl;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        console.error('Shader compilation error:', error);
      }
    }

    getFragmentShader() {
      return "#version 300 es\nprecision highp float;\nuniform vec2 resolution;\nuniform float time;\nout vec4 fragColor;\nvoid main(){\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec3 col = 0.5 + 0.5 * cos(time + uv.xyx + vec3(0, 2, 4));\n  fragColor = vec4(col, 1.0);\n}";
    }

    updateScale(scale: number) {
      this.scale = scale;
      this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
    }

    setup() {
      const gl = this.gl;
      this.vs = gl.createShader(gl.VERTEX_SHADER);
      this.fs = gl.createShader(gl.FRAGMENT_SHADER);

      if (!this.vs || !this.fs) return;

      this.compile(this.vs, "#version 300 es\nprecision highp float;\nattribute vec4 position;\nvoid main(){gl_Position=position;}");
      this.compile(this.fs, this.getFragmentShader());

      this.program = gl.createProgram();

      if (!this.program) return;

      gl.attachShader(this.program, this.vs);
      gl.attachShader(this.program, this.fs);
      gl.linkProgram(this.program);

      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(this.program));
      }
    }

    init() {
      const gl = this.gl;
      const program = this.program;
      if (!program) return;

      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      const resolution = gl.getUniformLocation(program, 'resolution');
      const time = gl.getUniformLocation(program, 'time');

      if (resolution) (program as any).resolution = resolution;
      if (time) (program as any).time = time;
    }

    render(now = 0) {
      const gl = this.gl;
      const program = this.program;

      if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

      const resolution = gl.getUniformLocation(program, 'resolution');
      const time = gl.getUniformLocation(program, 'time');

      if (resolution) gl.uniform2f(resolution, this.canvas.width, this.canvas.height);
      if (time) gl.uniform1f(time, now);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    reset() {
      if (this.program) this.gl.deleteProgram(this.program);
      if (this.vs) this.gl.deleteShader(this.vs);
      if (this.fs) this.gl.deleteShader(this.fs);
      if (this.buffer) this.gl.deleteBuffer(this.buffer);
    }
  }

  const resize = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const dpr = Math.max(1, 0.5 * (window.devicePixelRatio || 1));

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    if (rendererRef.current) {
      rendererRef.current.updateScale(dpr);
    }
  };

  const loop = (now: number) => {
    if (!rendererRef.current) return;

    rendererRef.current.render(now);
    animationFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const dpr = Math.max(1, 0.5 * (window.devicePixelRatio || 1));

    rendererRef.current = new WebGLRenderer(canvas, dpr) as any;

    rendererRef.current.setup();
    rendererRef.current.init();

    resize();

    loop(0);

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.reset();
      }
    };
  }, [canvasRef]);

  return canvasRef;
};

const ShaderBackground: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-black ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
      />
    </div>
  );
};

export { ShaderBackground };
