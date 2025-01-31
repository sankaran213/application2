import React, { useState } from "react";
import { Navbar, Nav, Button, Drawer, IconButton } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import PlusIcon from "@rsuite/icons/Plus";
import "rsuite/dist/rsuite.min.css";

const ResponsiveNavbar = ({ onAdd }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      {/* Navbar */}
      <Navbar appearance="default" className="navbar-container">
        <Navbar.Brand href="#" className="logo-container">
          <img src="Logo.png" alt="Company Logo" className="company-logo" />
        </Navbar.Brand>
        <Nav className="desktop-nav">
          <Nav.Item href="/home">Home</Nav.Item>
          <Nav.Item href="#">About</Nav.Item>
          <Nav.Item href="#">Contact</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Button
            onClick={onAdd}
            className="desktop-nav add-btn"
            appearance="primary"
          >
            <PlusIcon /> Add
          </Button>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            icon={<MenuIcon />}
            appearance="subtle"
            onClick={toggleDrawer}
            className="mobile-nav"
          />
        </Nav>
      </Navbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer open={drawerOpen} onClose={toggleDrawer} placement="right">
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Nav vertical>
            <Nav.Item href="/home">Home</Nav.Item>
            <Nav.Item href="#">About</Nav.Item>
            <Nav.Item href="#">Contact</Nav.Item>
            <Button
              onClick={onAdd}
              className="add-btn-mobile"
              appearance="primary"
            >
              <PlusIcon /> Add
            </Button>
          </Nav>
        </Drawer.Body>
      </Drawer>

      {/* Styling */}
      <style jsx>{`
        .navbar-container {
          background-color: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 0 20px;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .company-logo {
          height: 40px;
          margin-right: 20px;
        }
        .desktop-nav {
          display: none;
        }
        .mobile-nav {
          display: flex;
        }
        .add-btn {
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          border: none;
          color: white;
          font-weight: bold;
          padding: 8px 16px;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .add-btn:hover {
          background: linear-gradient(90deg, #0072ff, #00c6ff);
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        .add-btn-mobile {
          margin-top: 16px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default ResponsiveNavbar;
