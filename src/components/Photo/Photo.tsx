import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import mountainBoy from "/src/assets/Portraits/MountainBoy.jpg";
import babyShower from "/src/assets/Events/BabyShower.jpg";

import fujifilm from "/src/assets/fujifilm.jpg";
import konica from "/src/assets/konica.jpg";

import "./Photo.css";

function Photo() {
  return (
    <>
      <div className="photoLinkBox">
        <Stack
          spacing={12}
          direction={{ xs: "column", md: "row" }}
          className="photoLinksStack"
        >
          <div className="photoLinksContainer">
            <Link to="/portfolio/photo/portraits">
              <img src={mountainBoy} className="photoLinks" />
              <div className="photoLinksText">
                <b>Portraits</b>
              </div>
            </Link>
          </div>
          <div className="photoLinksContainer">
            <Link to="/portfolio/photo/events">
              <img src={babyShower} className="photoLinks" />
              <div className="photoLinksText">
                <b>Events</b>
              </div>
            </Link>
          </div>
        </Stack>
      </div>
      <div className="photoAboutFlexBox">
        <div className="photographyAboutBox">
          <h2 className="photoAboutHeader">About My Photography</h2>
          <p className="photoAboutText">
            I've been exposed to photography and film for as long as I can
            remember. My dad would document my siblings and my childhood
            whenever he got the chance. At times I would be annoyed when my dad
            said it was time to take photos, but it was something I understand
            more and more as I got older. Our core memories are now truly
            documented to look back at.
            <br></br>
            <br></br>I started actually taking interest with photography in high
            school when my brother saved up enough money to be a Canon EOS Rebel
            T6. At this point, it was just a hobby for me to take fun photos of
            my friends whenever we went out. I would bring it on trips to the
            city or special events like my friend's high school graduation
            party.
            <br></br>
            <br></br>I was only really hobby shooting between high school to
            college when I began to experiment with 35mm film photography both
            in colour and black & white. I went to my local camera store and
            asked around about what the owner had for sale. I ended up with a
            Konica Autoreflex T3 and eventually a Nikon Nikkormat too. There's
            no better way to learn how to take a good photo than by knowing you
            have minimal software assistance and limited shots. Every shot
            counts, the type of film being used, the aperture and shutter speed,
            what I shoot is what I get.<br></br>
            <br></br>
            Fast forward to today and I can officially say I can shoot
            professionally for friends and special events. This year, I got to
            be a photographer for a wedding and a baby shower! Although I
            started off stressed I still managed to pull it off and leave the
            families satisfied with what I had to offer. I take great pride in
            my photography over the years and I hope you enjoy it too!
          </p>
        </div>
        <div className="cameraPhotos">
          <img src={fujifilm} />
          <img src={konica} />
        </div>
      </div>
    </>
  );
}

export default Photo;
