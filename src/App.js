import React, { useState, useEffect } from "react";
import axios from 'axios'

//Components
import Task from './components/Task'
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";
import ShowTask from "./components/ShowTask";

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

  const handleCreate = (data) => {
    axios.post(`http://localhost:4000/tasks`, data).then(response => {
      setTasks([...tasks, response.data])
    })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/tasks/${id}`).then(response => {
      setTasks(tasks.filter(task => {
        return task._id !== response.data._id
      }))

    })
  }

  const handleEdit = (data) => {
    console.log(data)
    document.getElementById(`${data._id + 1}`).classList.remove('hidden')
    axios.put(`http://localhost:4000/tasks/${data._id}`, data).then(response => {
      setTasks(tasks.map(task => {
        return task._id !== data._id ? task : data
      }))

    })
  }

  const handleShowTask = (data) => {
    axios.get(`http://localhost:4000/tasks/${data._id}`).then(response => {
      //setTasks(response.data)
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
                    <Task task={task} key={idx} handleShowTask={handleShowTask} />
                  </>
                )
              })}
            </Col>
            <Col className="bg-warning element-2 h-100">
              {tasks.map((task, idx) => {
                return (
                  <>
                    <ShowTask task={task} handleEdit={handleEdit} handleDelete={handleDelete} idx={idx} />
                    <EditTask task={task} id={idx} handleEdit={handleEdit} />
                  </>
                )

              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
