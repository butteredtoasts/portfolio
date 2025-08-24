import { PortraitImageSlider } from "../PotraitImgSlides/PortraitImageSlider";

import mountainBoy from "/src/assets/Portraits/mountainBoy.jpg";
import mountainBoy1 from "/src/assets/Portraits/mountainBoy1.jpg";
import mountainBoy2 from "/src/assets/Portraits/mountainBoy2.jpg";
import mountainBoy3 from "/src/assets/Portraits/mountainBoy3.jpg";
import mountainBoy4 from "/src/assets/Portraits/mountainBoy4.jpg";

import girl from "/src/assets/Girl.jpeg";

import "./Portraits.css";

function Portraits() {
  const mountainImg = [mountainBoy1, mountainBoy2, mountainBoy3];
  const girlImg = [girl];

  return (
    <>
      <div className="mountainFlexBox">
        <div className="mountainImageSliderBox">
          <PortraitImageSlider imageUrls={mountainImg} />
        </div>
        <div className="mountainTextBox">
          <h1 className="mountainTextHeader">Eren Yeager on Bear Mountain</h1>
          <h2>Date: Oct 23, 2022</h2>
          <p className="mountainText">
            Back when Attack on Titan was in its prime, a friend of mine wanted
            to cosplay as Eren Yeager for Halloween. There was a specific panel
            in the manga where Eren is standing on a mountain during the sunset
            putting on his cape. I was asked by my friend if I can help him
            recreate that scene before Halloween passed. Naturally, I agreed.
            <br></br>
            <br></br>
            We decided that on this Sunday we would make a hiking trip out of
            it. We met at the base of Bear Mountain State Park in New York and
            make our way to the top before the sunset. I managed to get my
            expected photo in as well as some extra shots while we still had
            light. Not only did I get photos my friend was happy with but I also
            got my cardio in. :D
          </p>
        </div>
      </div>
      <div className="moutainBoyHorizontalFlexBox">
        <img src={mountainBoy} className="mountainBoyLandscape" />
        <img src={mountainBoy4} className="mountainBoyLandscape" />
      </div>

      <div className="girlFlexBox">
        <div className="girlImageSliderBox">
          <PortraitImageSlider imageUrls={girlImg} />
        </div>
        <div className="girlTextBox">
          <h1 className="girlTextHeader">For the Holidays</h1>
          <h2>Date: Dec 22, 2024</h2>
          <p className="girlText">
            During the holidays in my hometown, Huntington Station, the road on
            Wall St within the Village gets shut down and turned into a festive
            spot. Lights, music, props, and a very large Christmas tree are all
            set up for people to visit. Obviously, it's also a wonderful spot to
            take photos in.
            <br></br>
            <br></br>I went with a friend to take photos with while we still had
            time to do so. With countless props and storefronts to use I was
            really able to get creative.
          </p>
        </div>
      </div>
    </>
  );
}

export default Portraits;
