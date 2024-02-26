import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar"

const React = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10} id="Main">
            <div>
              {" "}
              <h1>REACT</h1>
              <p style ={{padding:'30px 60px'}} >
                React is a framework that employs Webpack to automatically
                compile React, JSX, and ES6 code while handling CSS file
                prefixes. React is a JavaScript-based UI development library.
                Although React is a library rather than a language, it is widely
                used in web development. The library first appeared in May 2013
                and is now one of the most commonly used frontend libraries for
                web development. React offers various extensions for entire
                application architectural support, such as Flux and React
                Native, beyond mere UI.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default React;
