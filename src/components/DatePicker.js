import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PickADate = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    const handleDateChange = () => {
        console.log(selectedDate)
    }

    return (<>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} minDate={new Date()} onSelect={() => { handleDateChange() }} />
    </>);
}

export default PickADate;