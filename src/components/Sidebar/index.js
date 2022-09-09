import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { Home, Test1, DataSiswa } from "../../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPeopleGroup,
  faSchool,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [windowHeight, setwindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", setwindowHeight(window.innerHeight));
  }, [windowHeight]);

  return (
    <div>
      <Row>
        <Col
          lg="2"
          style={{
            height: windowHeight,
          }}
        >
          <ProSidebar>
            <SidebarHeader>
              <Row>
                <Col xs={3} style={{paddingLeft:"25px", paddingTop: "10px", paddingBottom: "10px"}}>
                  <Image src="logos.png" height={"50px"} />
                </Col>
                <Col style={{paddingTop:"20px"}}>
                  <h5>YPGMI Antiokhia</h5>
                </Col>
              </Row>
            </SidebarHeader>
            <SidebarContent>
              {
                <Menu iconShape="square">
                  <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
                    Home
                    <Link to="/" />
                  </MenuItem>
                  <SubMenu
                    title="Data Siswa"
                    icon={<FontAwesomeIcon icon={faPeopleGroup} />}
                  >
                    <MenuItem>
                      Daftar Siswa
                      <Link to="/siswa" />{" "}
                    </MenuItem>
                    <MenuItem>
                      Absensi
                      <Link to="/test" />
                    </MenuItem>
                  </SubMenu>
                  <MenuItem icon={<FontAwesomeIcon icon={faSchool} />}>
                    Kelas
                  </MenuItem>
                  <MenuItem icon={<FontAwesomeIcon icon={faBook} />}>
                    Tahun Ajaran
                  </MenuItem>
                </Menu>
              }
            </SidebarContent>
          </ProSidebar>
        </Col>
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test1 />} />
            <Route path="/siswa" element={<DataSiswa />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
