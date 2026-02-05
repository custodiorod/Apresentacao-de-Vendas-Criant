import React, { useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/components/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light"
      ? "blur-3xl"
      : blur === "medium"
      ? "blur-[80px]"
      : "blur-[120px]";

  const gradientSpeed = useMemo(() => `${speed * 20}s`, [speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden opacity-50">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
            style={
              {
                top: `${20 + (index * 20)}%`,
                left: `${20 + (index * 20)}%`,
                "--background-gradient-speed": gradientSpeed,
                "--tx-1": 0.3,
                "--ty-1": 0.3,
                "--tx-2": -0.3,
                "--ty-2": 0.3,
                "--tx-3": 0.3,
                "--ty-3": -0.3,
                "--tx-4": -0.3,
                "--ty-4": -0.3,
              } as React.CSSProperties
            }
            width={circleSize * 0.8}
            height={circleSize * 0.8}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill={color}
              className="opacity-40"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export { AnimatedGradient };
