import { Stack } from "@mui/material";
import { FadeUp } from "../Home/Home";
import "./Dev.css";

function Dev() {
  return (
    <>
      <div className="devBox">
        <FadeUp delay={0} duration-={0.5}>
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

          <h1 className="devHeader">Mythical Foods: A Minecraft Mod</h1>
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
            This project requires advanced knowledge of Java to pull it off such
            as events, subscribers, lambdas, generics, the ability to read
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
            <img src="/src/assets/airfruit.png" className="food" />
            <img src="/src/assets/vitafruit.png" className="food" />
            <img src="/src/assets/brightberries.png" className="food" />
          </Stack>
        </FadeUp>
      </div>
    </>
  );
}

export default Dev;
