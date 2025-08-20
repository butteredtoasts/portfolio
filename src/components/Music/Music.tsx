import { FadeUp } from "../Home/Home";
import "./Music.css";

function Music() {
  return (
    <>
      <FadeUp delay={0} duration={0.5}>
        <p className="musicText">
          No music to play on the site yet unfortunately! I will be adding
          tracks to play once I find out what's the best medium to host my music
          on.
        </p>
        <img src="\src\assets\pusheen.gif" className="meow" />
      </FadeUp>
    </>
  );
}

export default Music;
