import React from "react";
import { Sidenav, Nav, Toggle } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import "rsuite/dist/rsuite.min.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeKey, setActiveKey] = React.useState("1");

  return (
    <div
      style={{
        width: isOpen ? 240 : 60,
        transition: "width 0.3s",
        overflow: "hidden",
      }}
      className="bg-white h-screen shadow fixed"
    >
      <div
        style={{
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className={`toggle-icon ${isOpen ? "rotate-open" : "rotate-close"}`}
          onClick={toggleSidebar}
          style={{
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ddd",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>
      <hr />
      <Sidenav expanded={isOpen} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              {isOpen && "Dashboard"}
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              {isOpen && "User Group"}
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="3"
              title={isOpen ? "Advanced" : ""}
              icon={<MagicIcon />}
            >
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title={isOpen ? "Settings" : ""}
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
