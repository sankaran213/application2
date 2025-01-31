import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, Drawer, IconButton } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import PlusIcon from "@rsuite/icons/Plus";
import ExitIcon from "@rsuite/icons/legacy/Exit"; // Corrected icon import
import "rsuite/dist/rsuite.min.css";

const ResponsiveNavbar = ({ onAdd }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleLogout = () => navigate("/login");

  return (
    <>
      {/* Navbar */}
      <Navbar appearance="default" className="bg-white shadow-md px-4 py-2">
        <Navbar.Brand href="#" className="flex items-center">
          <img src="Logo.png" alt="Company Logo" className="h-10 mr-4" />
        </Navbar.Brand>

        {/* Desktop Navigation */}
        <Nav className="hidden md:flex space-x-6">
          <Nav.Item href="/home">Home</Nav.Item>
          <Nav.Item href="#">About</Nav.Item>
          <Nav.Item href="#">Contact</Nav.Item>
        </Nav>

        {/* Right-side buttons */}
        <Nav pullRight className="flex items-center space-x-4">
          <Button
            onClick={onAdd}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-md flex items-center space-x-2 hover:scale-105"
            appearance="primary"
          >
            <PlusIcon />
            <span>Add</span>
          </Button>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md flex items-center space-x-2 hover:scale-105"
            appearance="primary"
          >
            <ExitIcon />
            <span>Logout</span>
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
              <PlusIcon /> Add
            </Button>
            <Button
              onClick={handleLogout}
              className="mt-2 w-full bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
              appearance="primary"
            >
              <ExitIcon /> Logout
            </Button>
          </Nav>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;
