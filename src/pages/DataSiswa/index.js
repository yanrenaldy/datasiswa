import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../App.css";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoadingPage from "../../components/LoadingPage";

function DataSiswa() {
  const [tahunAjaran, settahunAjaran] = useState([]);
  const [daftarKelas, setdaftarKelas] = useState([]);
  const [dataArray, setdataArray] = useState({
    ta: "",
    kelas: "",
  });
  const [dataKelas, setdataKelas] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + "daftarkelas")
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdaftarKelas(data);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(
        API_URL + "datasiswa/" + dataArray.kelas + "&" + dataArray.ta
      )
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataKelas(data);
        setLoading(false)
      });
    return () => {
      isMounted = false;
    };
  },);

  const onChange = (e) => {
    const { name, value } = e.target;
    setdataArray((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClick = () => {
    setLoading(true)
    
  }

  return (
    <div>
      <div className="navbar-atas">
        <Row>
          <Col xs={1}>
            <FontAwesomeIcon icon={faArrowLeft} className="panah" />
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              name="ta"
              value={dataArray.ta}
              onChange={onChange}
              required
            >
              <option>Tahun Ajaran</option>
              {tahunAjaran.map((tahunAjaran, index) => (
                <option key={index}>{tahunAjaran.Tables_in_siswaMetho}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              name="kelas"
              value={dataArray.kelas}
              onChange={onChange}
              required
            >
              <option>Kelas</option>
              {daftarKelas.map((daftarKelas, index) => (
                <option key={index}>{daftarKelas.namaKelas}</option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={1}>
            <Button variant="primary" onClick={onClick}>Pilih</Button>
          </Col>
        </Row>
      </div>
      {loading ? (
          <LoadingPage />
        ) : (
      <div></div>)}
    </div>
  )
}

export default DataSiswa;
