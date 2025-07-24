import { Container, Row } from 'react-bootstrap';
import '../CSS/App.css';
import About from './About';
import Banner from './Banner';
import Header from './Header';
import Projects from './Projects';

function App() {
  return (
    <body>
      <main>
        <Container>
          <Row>
            <Row>
              <Header />
            </Row>
            <Row>
              <Banner />
            </Row>
            <Row>
              <About />
            </Row>
            <Row>
              <Projects />
            </Row>
          </Row>
        </Container>
      </main>
    </body>
  );
}

export default App;
