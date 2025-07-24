import { Container, Row, Col } from "react-bootstrap";
import "../CSS/About.css";
import headshot from "../Media/headshotPhoto.jpg";

const About = () => {

  return (
    <section id="about" className="my-3">
      <Container>
        <Row>
          <h2>About Me</h2>
        </Row>
        <Row id="about-row" className="mt-4">
          <Col>
          <Row className="justify-content-center">
            <img
              src={headshot}
              id="photoOfMe"
              alt="headshot of Jacob Kubik"
              width="500"
              height="500"
            />
          </Row>
          </Col>
          <Col className="align-self-center">
            <Row>
              <p>
                Hi there! I'm software engineer that enjoys solving problems across the stack - usually with JavaScript and React on the frontend and various languages on the backend.
              </p>
            </Row>
            <Row>
              <p>
                In my free time, you can find me playing with my dog, Ciáran,
                watching a good movie, getting some exercise, enjoying video
                games, or hanging out with friends.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;