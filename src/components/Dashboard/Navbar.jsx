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
      <Navbar appearance="default" className="bg-white shadow-md px-4 py-2">
        <Navbar.Brand href="#" className="flex items-center">
          <img src="Logo.png" alt="Company Logo" className="h-10 mr-4" />
        </Navbar.Brand>
        <Nav className="hidden md:flex space-x-6">
          <Nav.Item href="/home">Home</Nav.Item>
          <Nav.Item href="#">About</Nav.Item>
          <Nav.Item href="#">Contact</Nav.Item>
        </Nav>
        <Nav pullRight className="flex items-center space-x-4">
          <Button
            onClick={onAdd}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-md flex items-center space-x-2 hover:scale-105"
            appearance="primary"
          >
            <PlusIcon />
            <span>Add</span>
          </Button>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            icon={<MenuIcon />}
            appearance="subtle"
            onClick={toggleDrawer}
            className="block md:hidden"
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
              className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-md"
              appearance="primary"
            >
              <PlusIcon />
              Add
            </Button>
          </Nav>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;
