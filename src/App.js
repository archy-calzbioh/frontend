import React, { useState, useEffect } from "react";
import axios from 'axios'

//Components
import Task from './components/Task'
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";
import ShowTask from "./components/ShowTask";

//Bootstrap-React
import "bootstrap/dist/css/bootstrap.css";
import "./bare.min.css";
import { Container, Row, Col } from "react-bootstrap";



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
    <Container fluid className="cont">
      <Row className="my-row ">
        <Col
          xs={2}
          className="vh-100 left-col m-3 border border-primary rounded"
        >
          <Row className="h-25 d-flex flex-column ">
            <Col className="category my-col">a</Col>
            <Col className="category my-col">b</Col>
            <Col className="category my-col">c</Col>
          </Row>
          <Row className="h-25"></Row>
          <Row className="h-25"></Row>
          <Row className="h-25">
            <Col>
              <img src="https://i.imgur.com/BmTZGuy.png" alt="list" />
            </Col>
          </Row>
        </Col>

        <Col>
          <Row className="top-row mt-3 h-25 border border-primary rounded">
            <Col xs={12} className="my-col">
              <Row className="h-100 my-row">
                <Col className="d-flex align-items-center my-col">
                  <Col className="my-col">
                    <img src="https://imgur.com/juTiRg4.png" alt="logo" />
                  </Col>
                </Col>
                <Col className="my-col"></Col>
                <Col>
                  <Col className="category h-25 my-col">a</Col>
                  <Col className="category my-col">b</Col>
                  <Col className="category h-25 my-col">c</Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="h-75 my-row d-flex justify-content-between">
            <Col xs={5} className="p-5 border task-left rounded border-primary">
              <NewTask handleCreate={handleCreate} />
              {tasks.map((task, idx) => {
                return (
                  <>
                    <Task
                      task={task}
                      key={idx}
                      handleShowTask={handleShowTask}
                    />
                  </>
                );
              })}
            </Col>
            <Col xs={6} className=" p-5 task-right border border-primary rounded">
              {tasks.map((task, idx) => {
                return (
                  <>
                    <ShowTask
                      task={task}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      idx={idx}
                    />
                    <EditTask task={task} id={idx} handleEdit={handleEdit} />
                  </>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}



export default App;


