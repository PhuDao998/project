import React from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../styles/Dashboard.css';

const Sidebar = (props) => {


  return (
    <>

      <Nav className="mx-auto col-md-12 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky"></div>
        <div>
        <Nav.Item>
          <Link to="/about">About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">Contact Us</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/admin">Admin</Link>
        </Nav.Item>
        </div>
      </Nav>

    </>
  );
};
export default Sidebar;