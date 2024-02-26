import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeMindTechnology from "./CodeMindTechnology";
import JavaScript from "./JavaScript";
import Html from "./Html.";
import Css from "./Css";
import React from "./React";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Sidebar from "./Sidebar"
const Main = () => {
  return (
    <>
      {/* <h1>MAIN PAGE</h1> */}

      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="/" className='me-5'>
          <img
              src={require('./images.png')}
              width="100"
              height="70"
              className="d-inline-block align-center"
              alt="Codemind logo"
            />CODEMIND_TECHNOLOGY
            </Navbar.Brand>
            {/* <Navbar.Brand href="/">CodeMindTechnology</Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link href="/html">HTML</Nav.Link>
              <Nav.Link href="/css">CSS</Nav.Link>
              <Nav.Link href="/javascript">JAVASCRIPT</Nav.Link>
              <Nav.Link href="/React">REACT</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<CodeMindTechnology />}></Route>
          <Route exact path="/html" element={<Html />}></Route>
          <Route exact path="/css" element={<Css />}></Route>
          <Route exact path="/javascript" element={<JavaScript />}></Route>
          <Route exact path="/React" element={<React />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default Main;
