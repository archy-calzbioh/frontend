import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Container, Row, Col, Table } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col xs={2} className="bg-primary d-flex flex-column">
          <ul className="list-group flex-grow-1">
            <li className="list-group-item border border-primary">
              Rectangle 1
            </li>
            <li className="list-group-item border border-primary">
              Rectangle 2
            </li>
            <li className="list-group-item border border-primary">
              Rectangle 3
            </li>
          </ul>
        </Col>
        <Col xs={10} className="d-flex flex-column">
          <Row className="bg-secondary" style={{ height: "20%" }}>
            <Col xs={4} className="bg-danger" />
            <Col xs={8}>Row 1</Col>
          </Row>
          <Row className="flex-grow-1">
            <Col
              className="bg-success element-1 h-100 d-flex align-items-center justify-content-center"
            >
              <Table bordered className="w-100">
                <tbody>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Column 1</td>
                    <td>Column 2</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col className="bg-warning element-2 h-100">Element 2</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
