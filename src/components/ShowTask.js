import { useState } from 'react'
import { Col, Row } from "react-bootstrap";

const ShowTask = ({ task, handleDelete, handleEdit }) => {

    return (
      <div className="hidden" id={task._id}>
        <h3>{task.title}</h3>
        <h4>Description:{task.description}</h4>
        <h5>When: {task.date}</h5>
        <h5>Location: {task.location}</h5>
        <Row>
          <Col xs={2}>
            <button
              className="btn btn-secondary"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </Col>
          <Col>
            <button className="btn btn-info" onClick={() => handleEdit(task)}>
              Edit
            </button>
          </Col>
        </Row>
      </div>
    );
}

export default ShowTask;