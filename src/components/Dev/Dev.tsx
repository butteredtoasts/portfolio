import { Stack } from "@mui/material";
import "./Dev.css";

function Dev() {
  return (
    <>
      <div className="devBox">
        <br></br>
        <br></br>

        <h1>This Website!</h1>
        <p className="devBody">
          This website is a solid example of my understanding on web development
          including HTML, CSS, and JavaScript React. In this project, I've used
          various React tools such as Routing, Buttons, Links, and general
          Component structuring to get it all working. For example, the
          navigation bar and the portfolio buttons use Routing and Links to make
          the proper Components visible without reloading the page. This is the
          power of React for single-page applications (SPA). <br></br>
          <br></br>
          My first goal is to make it simple and readable on desktops. However,
          I'm fully aware that some people may need to view this website on
          their phone. Once I consider this website to be feature-complete I can
          then work on formatting for mobile devices too.
        </p>

        <h1>Mythical Foods: A Minecraft Mod</h1>
        <p className="devBody">
          Minecraft is an open-source video game that allows third-party
          developers to alter or add additional code for endless gameplay
          possibilities. I have put together a mod using the source code that
          added additional food and crops that give the player access to special
          effects when grown and consumed. This is programmed primarily in Java
          using IntelliJ as an IDE and Gradle to build the application. Check
          out my GitHub in the Contact tab to see the code.
        </p>
        <br></br>

        <Stack spacing={6} direction="row" className="foodImg">
          <img src="\src\assets\airfruit.png" className="food" />
          <img src="\src\assets\vitafruit.png" className="food" />
          <img src="\src\assets\brightberries.png" className="food" />
        </Stack>
      </div>
    </>
  );
}

export default Dev;
