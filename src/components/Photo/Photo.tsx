import { FadeUp } from "../Home/Home";
import "./Photo.css";

import babyShower from "/src/assets/BabyShower.jpg";
import girl from "/src/assets/Girl.jpeg";
import taco from "/src/assets/Taco.jpg";

function Photo() {
  var girlBoxFinal = girlBoxFormat();

  return (
    <>
      <br></br>
      <br></br>
      <FadeUp delay={0.25} duration={0.5}>
        <div className="babyShowerBox">
          <img src={babyShower} className="babyShowerImg" />
          <p className="babyShowerText">
            I'm available for taking professional photos at special events such
            as baby showers and weddings!
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.25} duration={0.5}>
        {girlBoxFinal}
      </FadeUp>

      <FadeUp delay={0.25} duration={0.5}>
        <div className="tacoBox">
          <img src={taco} className="tacoImg" />
          <p className="tacoText">
            If you also need content of your product, location, or services,
            then I am STILL your guy!
          </p>
        </div>
      </FadeUp>
    </>
  );
}

export function girlBoxFormat() {
  let width = window.innerWidth;
  var girlBoxContent;

  if (width < 768) {
    return (girlBoxContent = (
      <div className="girlBox">
        <img src={girl} className="girlImg" />
        <p className="girlText">
          My portraits go beyond just a photo of you smiling. The background,
          colours, and lighting all matter just as much as your face!
        </p>
      </div>
    ));
  } else {
    return (girlBoxContent = (
      <div className="girlBox">
        <p className="girlText">
          My portraits go beyond just a photo of you smiling. The background,
          colours, and lighting all matter just as much as your face!
        </p>
        <img src={girl} className="girlImg" />
      </div>
    ));
  }
}

export default Photo;
