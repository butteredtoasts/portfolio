import { FadeUp } from "../Home/Home";
import { PortraitImageSlider } from "../PotraitImgSlides/PortraitImageSlider";

import "./Photo.css";

import babyShower from "/src/assets/BabyShower.jpg";

import girl from "/src/assets/Girl.jpeg";
import mountainBoy from "/src/assets/MountainBoy.jpg";
import coupleDance from "/src/assets/CoupleDance.jpg";

import taco from "/src/assets/Taco.jpg";
import tacoWork1 from "/src/assets/TacoWork1.jpg";
import tacoWork2 from "/src/assets/TacoWork2.jpg";

function Photo() {
  var eventBoxFinal = portraitBoxFormat("event");
  var portraitBoxFinal = portraitBoxFormat("portrait");
  var productBoxFinal = portraitBoxFormat("product");

  return (
    <>
      <br></br>
      <br></br>
      <FadeUp delay={0.25} duration={0.5}>
        <div className="babyShowerBox">
          <img src={babyShower} className="babyShowerImg" />
          <div className="photoTitles">
            <h2>Events</h2>
            <p className="babyShowerText">
              I'm available for event photography such as baby showers and
              weddings!
            </p>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.25} duration={0.5}>
        {portraitBoxFinal}
      </FadeUp>

      <FadeUp delay={0.25} duration={0.5}>
        {productBoxFinal}
      </FadeUp>
    </>
  );
}

export function portraitBoxFormat(imagesValue: string) {
  let width = window.innerWidth;
  var boxContent;

  const eventImages = [girl, mountainBoy, coupleDance];
  const productImages = [taco, tacoWork1, tacoWork2];

  var imagesToUse = new Array(3);
  if (imagesValue === "portrait") {
    imagesToUse = eventImages;
  } else if (imagesValue === "product") {
    imagesToUse = productImages;
  }

  if (width < 768) {
    return (boxContent = (
      <div className="portraitBox">
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            aspectRatio: "16 / 10",
            margin: "0 auto",
            marginBottom: "10px",
          }}
        >
          <PortraitImageSlider imageUrls={imagesToUse} />
        </div>
        <div className="photoTitles">
          <h2>Portraits</h2>
          <p className="portraitText">
            My portraits go beyond just a photo of you smiling. The background,
            colours, and lighting all matter just as much as your face!
          </p>
        </div>
      </div>
    ));
  } else if (imagesValue === "product") {
    {
      return (boxContent = (
        <div className="tacoBox">
          <div
            style={{
              maxWidth: "800px",
              width: "100%",
              aspectRatio: "16 / 10",
              margin: "0 auto",
              marginBottom: "10px",
            }}
          >
            <PortraitImageSlider imageUrls={imagesToUse} />
          </div>
          <div className="photoTitles">
            <h2>Products</h2>
            <p className="tacoText">
              If you also need content of your product, location, or services,
              then I am STILL your guy!
            </p>
          </div>
        </div>
      ));
    }
  } else {
    return (boxContent = (
      <div className="portraitBox">
        <div className="photoTitles">
          <h2>Portraits</h2>
          <p className="portraitText">
            My portraits go beyond just a photo of you smiling. The background,
            colours, and lighting all matter just as much as your face!
          </p>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            aspectRatio: "16 / 14",
            margin: "0 auto",
          }}
        >
          <PortraitImageSlider imageUrls={imagesToUse} />
        </div>
      </div>
    ));
  }
}

export default Photo;
