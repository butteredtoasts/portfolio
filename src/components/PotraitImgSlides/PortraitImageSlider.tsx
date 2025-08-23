import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import "./PortraitImageSlider.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export function PortraitImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="portrait-image-slider-image"
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="portraitImageSliderButton"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="portraitImageSliderButton"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
