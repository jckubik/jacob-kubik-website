import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Header.css';
import jacobKubikLogo from '../Media/jacobKubikLogo.jpg';
import NavBar from './NavBar';

const Header = () => {

  return (
     <section id="header" data-theme-header="light">
      <Container>
           <header id="navigation">
            <Row id='media-outside-row' sm className='align-items-center gap-3 media-outside-row'>
              <Col>
                <Row className='align-items-center name-logo-row'>
                  <Col sm="auto">
                    <div id="logo" className='logo'>
                      <img
                        src={jacobKubikLogo}
                        alt="Logo"
                        height="50"
                        width="50"
                      /> 
                    </div>
                  </Col>
                  <Col>
                    <h1 id="mainHeader" className='d-flex justify-content-start m-0'>
                      <a href="#header">Jacob Kubik</a>
                    </h1>
                  </Col>
                </Row>
              </Col>
              <Col>
                <NavBar />
              </Col>
            </Row>
          </header>
      </Container>
    </section>
  );
};

export default Header;