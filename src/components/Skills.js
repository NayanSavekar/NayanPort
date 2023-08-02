import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
       <TrackVisibility>
               {({ isVisible }) =>
                <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A versatile professional with expertise in web development, data
                analysis, and project management, combining technical
                proficiency with strong problem-solving abilities to deliver
                innovative solutions
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                // className="carousel-inner"
                >
                <div className="item">
                  <CircularProgressbar
                    value={90}
                    text={`${90}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "round",
                      textSize: "16px",
                      pathTransitionDuration: 5,                      
                      textColor: "#fff",
                      trailColor: "#0000",
                      pathColor: "rgb(33, 169, 233)",
                    })}
                  /><h5> Front End</h5>
                </div>
                <div className="item">
                <CircularProgressbar
                    value={85}
                    text={`${85}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "round",
                      textSize: "16px",
                      pathTransitionDuration:5,                      
                      textColor: "#fff",
                      trailColor: "#0000",
                      pathColor: "rgb(33, 169, 233)",
                    })}
                  /><h5> Back End</h5>
                </div>
                <div className="item" >
                <CircularProgressbar
                    value={90}
                    text={`${90}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "round",
                      textSize: "16px",
                      pathTransitionDuration:5,                      
                      textColor: "#fff",
                      trailColor: "#0000",
                      pathColor: "rgb(33, 169, 233)",
                    })}
                  /><h5> Graphic Designing</h5>
                </div>
                <div className="item" >
                <CircularProgressbar
                    value={80}
                    text={`${80}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "round",
                      textSize: "16px",
                      pathTransitionDuration:5,                      
                      textColor: "#fff",
                      trailColor: "#0000",
                      pathColor: "rgb(33, 169, 233)",
                    })}
                  /><h5> UI/UX Designing</h5>
                </div>
                <div className="item" >
                <CircularProgressbar
                    value={75}
                    text={`${75}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "round",
                      textSize: "16px",
                      pathTransitionDuration:5,                      
                      textColor: "#fff",
                      trailColor: "#0000",
                      pathColor: "rgb(33, 169, 233)",
                    })}
                  /><h5> Data Analysis</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      </div>}
      </TrackVisibility>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
