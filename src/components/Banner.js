import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/my.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(1000 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full Stack Developer",
    "Web and App Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Data Analytics",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Nayan Savekar`}
              <br></br>{" "}
              <span
                className="txt-rotate"
                dataPeriod="2000"
                data-rotate='[ "Full Stack Developer", "Web and App Developer", "Graphic Designer", "UI/UX Designer", "Data Analytics" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p tect-align="center">
              Hello! As a full stack developer, I excel in
              creating dynamic and responsive websites and applications. With
              expertise in both web and app development, I bring innovative
              ideas to life and ensure seamless user experiences across
              different platforms. Additionally, I have a passion for graphic
              design, where I skillfully blend aesthetics and functionality to
              create visually appealing designs. My expertise also extends to
              UI/UX design, where I focus on crafting intuitive interfaces that
              enhance user engagement and satisfaction. Moreover, I possess
              strong capabilities in data analytics, allowing me to derive
              meaningful insights from complex datasets. With my diverse skill
              set, I am dedicated to delivering high-quality solutions that
              exceed expectations.
            </p>
           <div className="dwn"><a  href="NayanSavekarResume.pdf" download>Download Resume</a>
           </div> </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <img src={headerImg} alt="Header Img"/>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
