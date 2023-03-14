import React, { useState, useEffect } from "react";
import axios from 'axios'

//Components
import Task from './components/Task'
import NewTask from "./components/NewTask";

//Bootstrap-React
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Table } from "react-bootstrap";



const App = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = () => {
    axios.get('http://localhost:4000/tasks').then(response => {
      setTasks(response.data)
    })
  }

  const handleCreate = (task) => {
    axios.post(`http://localhost:4000/tasks`, task).then(response => {
      setTasks([...tasks, response.data])
    })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/tasks/${id}`).then(response => {
      //console.log(response.data)
      // setTasks(tasks.filter(task => {
      //   return task.id !== response.id
      // }))


    })
  }



  useEffect(() => {
    getTasks()
  }, [])

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
              className="bg-success element-1 h-100"
            ><NewTask handleCreate={handleCreate} />
              {tasks.map((task, idx) => {
                return (
                  <>
                    <Task task={task} setTasks={setTasks} key={idx} handleDelete={handleDelete} />
                  </>
                )
              })}
            </Col>
            <Col className="bg-warning element-2 h-100">Element 2</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
