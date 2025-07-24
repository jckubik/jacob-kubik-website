import { Container, Row } from "react-bootstrap";
import "../CSS/Project.css";

const Project = ({ url, projectTitle, img, imgAlt, description, technologies }) => {

  return (
    <a href={url}>
    <Container className="project h-100 gap-2">
        <Row className="mx-2">
          <img
            src={img}
            alt={imgAlt}
            width="250"
            height="300"
            className="projectImg p-0"
          />
        </Row>
        <Row className="mx-2">
          <h3 className="projectH3 mt-2 p-0">{projectTitle}</h3>
        </Row>
        <Row className="h-100 mx-2">
          <div className="projectDescriptionSection">
            <p>
              {description}
            </p>
            <ul className="projectTechnologiesList">
              {technologies.map(tech => {
                return (<li>{tech}</li>);
              })}
            </ul>
          </div>
        </Row>
        </Container>
      </a>
  );
};

export default Project;