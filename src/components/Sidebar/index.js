import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Home, Test1, DataSiswa } from "../../pages";

function Sidebar() {
  return (
    <div>
        <Row>
          <Col lg="2" >
            <ProSidebar>
              <SidebarContent>
                {
                  <Menu iconShape="square">
                    <MenuItem>
                      Home
                      <Link to="/" />
                    </MenuItem>
                    <SubMenu title="Data Siswa">
                      <MenuItem>Daftar Siswa<Link to="/siswa"/> </MenuItem>
                      <MenuItem>Absensi<Link to="/test"/></MenuItem>
                    </SubMenu>
                    <MenuItem>Kelas</MenuItem>
                    <MenuItem>Tahun Ajaran</MenuItem>
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
