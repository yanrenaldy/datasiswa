import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../App.css";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DataSiswa() {
  const [tahunAjaran, settahunAjaran] = useState([]);
  const [dataArray, setdataArray] = useState({
    ta: "",
  });

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + "tahunajaran")
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) settahunAjaran(data);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div className="navbar-atas">
        <Row>
          <Col xs={1}>
            <FontAwesomeIcon icon={faArrowLeft} className="panah" />
          </Col>
          <Col>
            <Form.Select aria-label="Default select example" name="ta" required>
              <option>Tahun Ajaran</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              name="kelas"
              required
            >
              <option>Kelas</option>
            </Form.Select>
          </Col>
          <Col xs={1}>
            <Button variant="primary">Pilih</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DataSiswa;
