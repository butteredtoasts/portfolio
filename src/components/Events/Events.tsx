import { PortraitImageSlider } from "../PotraitImgSlides/PortraitImageSlider";
import { Stack } from "@mui/material";

import "./Events.css";

import bs from "/src/assets/Events/BabyShower.jpg";
import bs1 from "/src/assets/Events/BabyShower1.jpg";
import bs2 from "/src/assets/Events/BabyShower2.jpg";
import bs3 from "/src/assets/Events/BabyShower3.jpg";
import bs4 from "/src/assets/Events/BabyShower4.jpg";
import bs5 from "/src/assets/Events/BabyShower5.jpg";

import w1 from "/src/assets/Events/Wedding1.jpg";
import w2 from "/src/assets/Events/Wedding2.jpg";
import w3 from "/src/assets/Events/Wedding3.jpg";
import w4 from "/src/assets/Events/Wedding4.jpg";
import w5 from "/src/assets/Events/Wedding5.jpg";
import w6 from "/src/assets/Events/Wedding6.jpg";

function Events() {
  const babyShowerImages = [bs, bs1, bs2, bs5];
  const weddingImages = [w1, w2, w3, w4];

  return (
    <>
      <div className="weddingFlexBox">
        <div className="weddingImageSliderBox">
          <PortraitImageSlider imageUrls={weddingImages} />
        </div>
        <div className="weddingTextBox">
          <h1 className="weddingTextHeader">Grashanti</h1>
          <h2>Date: May 14, 2025</h2>
          <p className="weddingText">
            I was fortunate enough this year to be a photographer at such a
            special event! All cultures have their own wedding traditions. In
            Hinduism, there is a celebration known as Grashanti which is a
            pre-wedding celebration that wishes a happy life for the new couple.
          </p>
        </div>
      </div>
      <div className="weddingHorizontalFlexBox">
        <img src={w5} className="weddingLandscape" />
        <img src={w6} className="weddingLandscape" />
      </div>

      <div className="babyShowerFlexBox">
        <div className="babyShowerImageSliderBox">
          <PortraitImageSlider imageUrls={babyShowerImages} />
        </div>
        <div className="babyShowerTextBox">
          <h1 className="babyShowerTextHeader">Baby Shower</h1>
          <h2>Date: June 15, 2025</h2>
          <p className="babyShowerText">
            The second event I got to shoot for was a baby shower! This family
            was expecting a baby very soon and were celebrating in their
            traditional ways for good fortune and gratitude.
          </p>
        </div>
      </div>
      <div className="babyShowerHorizontalFlexBox">
        <img src={bs3} className="babyShowerLandscape" />
        <img src={bs4} className="babyShowerLandscape" />
      </div>
    </>
  );
}

export default Events;
