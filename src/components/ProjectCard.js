import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl, href , description}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href ={href} style={{color:"#FFF",}}><b>{description}</b></a>
        </div>
      </div>
    </Col>
  )
}