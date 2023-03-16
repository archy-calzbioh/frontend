import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./bare.min.css";

import Tasks from './pages/Tasks'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [showTask, setShowTask] = useState({})

  const getTasks = () => {
    axios.get('https://taskawaybackend.onrender.com/ta/tasks').then(response => {
      setTasks(response.data)
    })
  }

  const handleCreate = (data) => {
    axios.post(`https://taskawaybackend.onrender.com/ta/tasks`, data).then(response => {
      setTasks([...tasks, response.data])
    })
  }

  const handleDelete = (id) => {
    axios.delete(`https://taskawaybackend.onrender.com/ta/tasks/${id}`).then(response => {
      setTasks(tasks.filter(task => {
        return task._id !== response.data._id
      }))

    })
  }

  const handleEdit = (data) => {
    console.log(data)
    document.getElementById(`${data._id + 1}`).classList.remove('hidden')
    axios.put(`https://taskawaybackend.onrender.com/ta/tasks/${data._id}`, data).then(response => {
      setTasks(tasks.map(task => {
        return task._id !== data._id ? task : data
      }))

    })
  }

  const handleShowTask = (data) => {
    axios.get(`https://taskawaybackend.onrender.com/ta/tasks/${data._id}`).then(response => {
      setShowTask(response.data)
    })

  }



  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Tasks />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
