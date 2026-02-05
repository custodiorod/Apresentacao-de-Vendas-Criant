import React from 'react';

export const Component = () => {
  const images = [
    "/untitled-design-49.png",
    "/untitled-design-53.png",
    "/untitled-design-50.png",
    "/untitled-design-52.png"
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full relative overflow-hidden flex items-center justify-center">
        <div className="relative w-full flex items-center justify-center py-8">
          <div className="scroll-container w-full max-w-7xl">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((image, index) => {
                let imageSizeClass = "w-[768px] h-[500px]";
                if (image.includes("untitled-design-50")) {
                  imageSizeClass = "w-[307px] h-[262px]";
                } else if (image.includes("untitled-design-52")) {
                  imageSizeClass = "w-[342px] h-[239px]";
                } else if (image.includes("untitled-design-49")) {
                  imageSizeClass = "w-[360px] h-[190px]";
                } else if (image.includes("untitled-design-53")) {
                  imageSizeClass = "w-[291px] h-[256px]";
                }
                return (
                  <div
                    key={index}
                    className={`image-item flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl ${imageSizeClass}`}
                  >
                    <img
                      src={image}
                      alt={`Image ${(index % images.length) + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
