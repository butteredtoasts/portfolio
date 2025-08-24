import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

import "./Home.css";

import portraitA from "/src/assets/Portrait A.jpg";
import portraitB from "/src/assets/Portrait B.jpg";
import portraitC from "/src/assets/Portrait C.jpg";

function Home() {
  return (
    <>
      <div className="row">
        <FadeUp delay={0} duration={3.5}>
          <div>
            <img src={portraitC} className="img1" alt="Photo #1 of me" />
          </div>
        </FadeUp>
        <FadeUp delay={0.25} duration={3.5}>
          <div>
            <img src={portraitB} className="img2" alt="Photo #2 of me" />
          </div>
        </FadeUp>
        <FadeUp delay={0.5} duration={3.5}>
          <div>
            <img src={portraitA} className="img3" alt="Photo #3 of me" />
          </div>
        </FadeUp>
      </div>
      <div className="aboutMe">
        <FadeUp delay={0} duration={1.5}>
          <p className="text">
            My name is Khondoker Tazwar Akber, but feel free to call me Tazz.
            For the past few years, I've been a software engineer having worked
            for various companies that showcases my expertise. I have a passion
            for working with popular libraries and frameworks to produce
            full-stack applications such as Java Spring Boot as well as
            JavaScript Angular and React.<br></br>
            <br></br>
            Additionally, I spend my free time practicing photography and music
            production. Whether it's programming, shooting a photo, or making a
            new song nothing is more satisfying than completing the project.
            Take a look through my site to see what I've accomplished over the
            past few years. Keep in mind that my website is still under
            construction and will take time to be properly formatted for both
            mobile and desktop views. I'm still experimenting with layouts that
            I want to try.
          </p>
        </FadeUp>
      </div>
    </>
  );
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode;
  delay: number;
  duration?: number;
}) {
  let ref = useRef(null);
  let isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  );
}

export default Home;
