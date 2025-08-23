import { Stack } from "@mui/material";
import { FadeUp } from "../Home/Home";
import "./Dev.css";

import award from "/src/assets/RegeneronAward.jpg";
import tides from "/src/assets/TIDES.jpg";
import regeneronExtra from "/src/assets/regeneronExtra.jpg";
import labvoice from "/src/assets/LabVoice.png";

import airfruit from "/src/assets/airfruit.png";
import vitafruit from "/src/assets/vitafruit.png";
import brightberries from "/src/assets/brightberries.png";

function Dev() {
  var regeneronLink =
    "https://www.bio-itworld.com/news/2024/03/19/2024-innovative-practices-winners-in-informatics-collaboration-clinical-it-genomics";
  var labVoiceLink = "https://www.labvoice.ai";

  return (
    <>
      <div className="devBox">
        <FadeUp delay={0} duration-={0.5}>
          <br></br>
          <br></br>
          <h1 className="devHeader">
            Regeneron Pharmaceuticals: Research IT Software Engineer
          </h1>
          <img
            src={tides}
            className="regeneronPhoto"
            alt="Me with the TIDES team in Boston"
          ></img>
          <p className="devBody">
            I worked at Regeneron for roughly a year and a half. I worked within
            the Research IT department primarily with a team known as{" "}
            <b>TIDES: </b>
            Transforming Information with Digital Experimental Solutions. I used
            a wide variety of tools and languages at this position that truly
            diversified what I'm capable of. I started with the notion that I'll
            be working on backend development, but I ended up on the team that
            was focused on improving the efficiency of the scientists. My work
            directly contributed to Regeneron receiving the{" "}
            <a href={regeneronLink}>
              Innovative Practices Award at Bio-IT World 2024
            </a>
            !<br></br> <br></br>
            <img
              src={award}
              className="regeneronPhoto"
              alt="Award from Bio-It World 2024"
            />
            So what did I improve? I revolutionized the data capture and
            accuracy of experiments and routine tasks across the company.
            Scientists across various departments i.e. Opthalmology, Cardio, Vet
            Services, etc. had difficulty accurately translating data from the
            experiment to their devices. Some scientists were recording hour
            long voice memos during testing and then mindlessly punching numbers
            into Excel at their desk listening to it. Others would use the
            "human robot" where there was a second scientist whose sole purpose
            was to sit there and record the data from the first scientist.
            Neither of these approaches were optimal.
            <br></br> <br></br>
            What did I use? Using <a href="https://www.labvoice.ai">LabVoice</a>
            , a JavaScript-based NLP tool built specifically for scientists, I
            designed several workflows that allowed the scientists to simply
            speak to the software and immediately upload their data into
            formatted and organized Excel sheets. Every workflow was built with
            the user in mind using detailed constraints ensuring that I followed
            their naming conventions and formatting. This way it was not an
            intrusive addition to their process and only an improvement.
            <br></br> <br></br>
            <img
              src={labvoice}
              className="regeneronPhoto"
              alt="LabVoice logo"
            />
            <br></br>
            Additionally, I used Power Platform to modernize the animal census
            process. What was originally done on paper is now done digitally
            using Power Apps and Power BI. The original process required several
            layers of transcription which was error-prone and time-consuming
            between each hand off. Now the data, discrepancies, and accurate
            timestamps are automatically handled with less steps in between.
            <br></br> <br></br>
            It has become much easier to track KPIs through my work. Every
            record of data that gets passed from both my LabVoice workflows and
            Power Platform applications comes with unique IDs, the user,
            timestamps, processes done, and much more making it very easy to
            monitor efficiency.
          </p>

          <br></br>
          <br></br>

          <h1 className="devHeader">This Website!</h1>
          <p className="devBody">
            This website is a solid example of my understanding on web
            development including HTML, CSS, and JavaScript React. In this
            project, I've used various React tools such as Routing, Buttons,
            Links, and general Component structuring to get it all working. For
            example, the navigation bar and the portfolio buttons use Routing
            and Links to make the proper Components visible without reloading
            the page. This is the power of React for single-page applications
            (SPA). <br></br>
            <br></br>
            My first goal is to make this simple and readable on desktops.
            However, I'm fully aware that some people may need to view this
            website on their phone. I've made it compatible and easy-to-read to
            read on your phone if you're on the go. Feel free to look for subtle
            differences in the format between your devices. <br></br>
            <br></br>
            The final step in this process is to stylize my website to be more
            "me" and not just information. I'm enthusiastic about all art and
            believe it should be used to express yourself through whatever
            medium including web design. Once this website is feature-complete I
            will consider adding more animations and photos that show off who I
            am.
          </p>

          <h1 className="devHeader">Mythical Food: A Minecraft Mod</h1>
          <p className="devBody">
            Minecraft is an open-source video game that allows third-party
            developers to alter or add additional code for endless gameplay
            possibilities. I have put together a mod using the source code that
            added additional food and crops that give the player access to
            special effects when grown and consumed. This is programmed
            primarily in Java using IntelliJ as an IDE and Gradle to build the
            application.
            <br></br>
            <br></br>
            This project requires advanced knowledge of Java to pull off such as
            events, subscribers, lambdas, generics, the ability to read
            documentation, and more. Check out my GitHub in the Contact tab to
            see the code.
            <br></br>
            <br></br>
            The textures below are some of the fruit textures I made myself in
            Photoshop. This is a very small snippet of all the textures actually
            in my mod. Each food has at least seven unique textures when
            counting the growth stage textures!
          </p>
          <br></br>

          <Stack spacing={6} direction="row" className="foodImg">
            <img src={airfruit} className="food" alt="Airfruit" />
            <img src={vitafruit} className="food" alt="Vitafruit" />
            <img src={brightberries} className="food" alt="Brightberries" />
          </Stack>
        </FadeUp>
      </div>
    </>
  );
}

export default Dev;
