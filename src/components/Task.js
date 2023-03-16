import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Task = ({ task, handleShowTask }) => {
  const showTask = () => {
    document.getElementById(`${task._id}`).classList.toggle("hidden");
    handleShowTask(task);
  };

  return (
    <Row>
      <Col xs={2}>
        <h5>{task.title}</h5>
      </Col>
      <Col>
        <button className="btn btn-info" onClick={() => showTask()}>
          Details
        </button>
      </Col>
    </Row>
  );
};

export default Task;
