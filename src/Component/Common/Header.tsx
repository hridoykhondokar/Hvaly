import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { BiSearch, BiUser } from 'react-icons/bi';
import logo from 'assets/image/hvaly.png';

const Header = () => {
  return (
    <div className="header_component">
      <div className="top_header py-2 bg-light border border-bottom">
        <Container className="d-flex algin-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall /> <a href="tell:01856132328">01856132328</a>
            </li>
            <li>
              <FaRegEnvelope />
              <a href="email:hridoykhondoker@gmail">hridoykhondoker@gmail</a>
            </li>
          </ul>
          <div>
            <BsPhone /> <a href="https//:hvaly.com">Save big on our app!</a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-2">
            <img className="branding" src={logo} alt="" />
            <InputGroup>
              <Form.Control
                className=" border border-primary"
                placeholder="Search Here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button id="basic-addon2">
                <BiSearch />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <BiUser />
              </li>
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <BiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
