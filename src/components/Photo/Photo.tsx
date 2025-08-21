import "./Photo.css";

function Photo() {
  var girlBoxFinal = girlBoxFormat();

  return (
    <>
      <br></br>
      <br></br>
      <div className="babyShowerBox">
        <img src="\src\assets\BabyShower.jpg" className="babyShowerImg" />
        <p className="babyShowerText">
          I'm available for taking professional photos at special events such as
          baby showers and weddings!
        </p>
      </div>

      {girlBoxFinal}

      <div className="tacoBox">
        <img src="\src\assets\Taco.jpg" className="tacoImg" />
        <p className="tacoText">
          If you also need content of your product, location, or services, then
          I am STILL your guy!
        </p>
      </div>
    </>
  );
}

export function girlBoxFormat() {
  let width = window.innerWidth;
  var girlBoxContent;

  if (width < 768) {
    return (girlBoxContent = (
      <div className="girlBox">
        <img src="\src\assets\Girl.jpeg" className="girlImg" />
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
        <img src="\src\assets\Girl.jpeg" className="girlImg" />
      </div>
    ));
  }
}

export default Photo;
