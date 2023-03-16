import { useState } from 'react'
import Home from './Map'
//import PickADate from './DatePicker'



import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// const PickADate = () => {
//     const [selectedDate, setSelectedDate] = useState(null)

//     console.log(selectedDate)



//     return (<>

//     </>);
// }

const NewTask = (props) => {

    const [task, setTask] = useState({})
    const [selectedDate, setSelectedDate] = useState(null)

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    // const handleChangeDate = (e) => {
    //     setSelectedDate(date)
    //     setTask({ ...task, [e.target.name]: selectedDate })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(task)
        e.target.reset()
    }

    console.log(selectedDate)

    return (<>
        <h3>New Task</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder='Title'
                />
            </div>
            <div className="mb-4">
                <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder='Description'
                />
            </div>
            <div className="mb-4">
                <DatePicker selected={selectedDate} selectedDate={selectedDate} onChange={date => setSelectedDate(date)} minDate={new Date()} />
            </div>
            <div className="mb-4">
                <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="location"
                    placeholder='Location'
                />
            </div>
            <input type='submit' />
        </form>
        <div className='div-map-container'>
            <Home />
        </div>
    </>);
}

export default NewTask;