// import "./css/Home.css";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <>
      <div id="mainFlex">
        <div className=" absolute top-[40%] left-[60%]">
          <div className="w-full h-full rainbow flex -z-0">
            <div className="h-[250px] w-[450px] bg-yellow-600  ">hi</div>
          </div>
        </div>
        <div className="mainTitle z-10">
          <span id="gradCol">Guiding Your Wellness Path</span>
          <span> Expert Care,</span>
          <span>Every Step of the Way!</span>
          <div className="gsButton">
            <ScrollLink
              to="/sign"
              id="signUp"
              style={{
                cursor: "pointer",
              }}
            >
              <Link to="sign">
                <span className="yay">Click to Start</span>
              </Link>
            </ScrollLink>
            <div className="backBlue"></div>
          </div>
        </div>
        <div id="heroImg" className="z-10">

        </div>
      </div>

      <div className="masterFeature" id="features">
        <div className="featureHead">
          <span>
            <h2>FEATURES WE PROVIDE</h2>
          </span>
          <span>
            <h1>Symptom relief at home</h1>
          </span>
          <span>Our AI powered by LLM helps in variety of ailments.</span>
        </div>
        <div className="embCard">
          <span className="featImg">
            <img src="/food.svg"></img>
          </span>
          <span className="featTit">Remedies Recommendation</span>
          <span className="featDes">
            We provide immediate aid recommendations to ease symptoms of a wide
            variety of diseases
          </span>
        </div>
        <div className="embCard">
          <span className="featImg">
            <img src="/bot.svg"></img>
          </span>
          <span className="featTit">Interactive Chatbot</span>
          <span className="featDes">
            Solve your queries by interacting with our bot.
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
