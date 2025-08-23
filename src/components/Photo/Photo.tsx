import { FadeUp } from "../Home/Home";
import { PortraitImageSlider } from "../PotraitImgSlides/PortraitImageSlider";

import "./Photo.css";

import babyShower from "/src/assets/BabyShower.jpg";
import girl from "/src/assets/Girl.jpeg";
import taco from "/src/assets/Taco.jpg";
import mountainBoy from "/src/assets/MountainBoy.jpg";
import coupleDance from "/src/assets/CoupleDance.jpg";

function Photo() {
  var portraitBoxFinal = portraitBoxFormat();

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
        <div className="tacoBox">
          <img src={taco} className="tacoImg" />
          <div className="photoTitles">
            <h2>Products</h2>
            <p className="tacoText">
              If you also need content of your product, location, or services,
              then I am STILL your guy!
            </p>
          </div>
        </div>
      </FadeUp>
    </>
  );
}

export function portraitBoxFormat() {
  let width = window.innerWidth;
  var portraitBoxContent;

  const eventImages = [girl, mountainBoy, coupleDance];

  if (width < 768) {
    return (portraitBoxContent = (
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
          <PortraitImageSlider imageUrls={eventImages} />
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
  } else {
    return (portraitBoxContent = (
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
          <PortraitImageSlider imageUrls={eventImages} />
        </div>
      </div>
    ));
  }
}

export default Photo;
