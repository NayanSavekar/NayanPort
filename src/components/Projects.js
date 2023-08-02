import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import car from "../assets/img/car.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import scholarship from "../assets/img/scholarship.png";
import TDL from "../assets/img/TDL.png";
import CPG from "../assets/img/CPG.png";
import dj from "../assets/img/dj.png";
import insta from "../assets/img/insta.png";
import watch from "../assets/img/watch.png";
import QR from "../assets/img/qr.png";
import Clothing from"../assets/img/cloth.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Scholarship Portal",
      href:"https://drive.google.com/drive/folders/1uoscgprDp37kGwFrT0zjL0tNaXx9nXsx?usp=drive_link",
      description: "Link",
      imgUrl: scholarship,
    },
    {
      title: "To Do List",
      href:"https://to-do-list-by-ns.netlify.app/",
      description: "live",
      imgUrl: TDL,
    },
    {
      title: "Color Palette Generator",
      href:"https://drive.google.com/drive/folders/1M13Kx2disy40ePKv5AZjuS26lQrk4fud?usp=drive_link",
      description: "Link",
      imgUrl: CPG,
    },
  ];

  const GDprojects = [
    {
      title: "Department journal cover page",
      href:"https://drive.google.com/file/d/1f7ezFodsZgIqxMGfAx7d9uQnBnc7fgvT/view?usp=drive_link",
      description: "Link",
      imgUrl: dj,
    },
    {
      title: "Rangmanch Graphic head",
      href:"https://instagram.com/rangmanch_pce?igshid=MzRlODBiNWFlZA==",
      description: "Link",
      imgUrl: insta,
    },
    {
      title: "Figma Design",
      href:"https://www.figma.com/file/IJfshHWY3hS9tYRcHZA5bv/Apple-watch?type=design&node-id=0%3A1&mode=design&t=qTDOXli39qb2saoM-1",
      description: "Link",
      imgUrl: watch,
    },
  ];
  const otherprojects = [
    {
      title: "Bluetooth control car using Arduino",
      href:"https://drive.google.com/drive/folders/1HYZ0Jdg0_8Fp8r3ZVyIDGYAaCr_yj1AG?usp=drive_link",
      description: "Link",
      imgUrl: car,
    },
    {
      title: "QR code Generator using python",
      href:"https://drive.google.com/drive/folders/12DhnezqoPIoy9gp5c4bRFHwKEykVPzHO?usp=drive_link",
      description: "Link",
      imgUrl: QR,
    },
    {
      title: "Smart Clothing System",
      href:"https://drive.google.com/drive/folders/1Qk8OWNbpAz80afbaSFPHgTbqNAX8A0_O?usp=drive_link",
      description: "Link",
      imgUrl: Clothing,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
               {({ isVisible }) =>
              
              <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <h2>Projects</h2>
                <p>The Project section showcases a collection of diverse and impactful endeavors, highlighting my expertise, skills, and creative problem-solving abilities.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Graphic</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          GDprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          otherprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
