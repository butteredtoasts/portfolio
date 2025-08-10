import "./Contact.css";

function Contact() {
  return (
    <>
      <h1 className="contactMe">Contact Me!</h1>
      <br></br>
      <div className="info">
        <div className="imageBox">
          <img src="src\assets\email.jpg" />
          <p className="imageText">tazwarakber@gmail.com</p>
        </div>
        <div className="imageBox">
          <img src="src\assets\phone.jpg" />
          <p className="imageText">516-263-7510</p>
        </div>
        <div className="imageBox">
          <img src="src\assets\linkedIn.jpg" />
          <a href="https://www.linkedin.com/in/tazwar-akber">LinkedIn</a>
        </div>
        <div className="imageBox">
          <img src="src\assets\instagram.png" />
          <a href="https://www.instagram.com/tazzakber/?hl=en">@tazzakber</a>
        </div>
        <div className="imageBox">
          <img src="src\assets\git.png" />
          <a href="https://github.com/butteredtoasts">GitHub</a>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="resume">
        <p>
          If you would like to download my resume,{" "}
          <a
            href="src\assets\Khondoker Tazwar Akber Resume SE.pdf"
            download="Khondoker Tazwar Akber Resume"
          >
            click here.
          </a>
        </p>
      </div>
    </>
  );
}

export default Contact;
