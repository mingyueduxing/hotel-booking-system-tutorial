import { useEffect, useState } from 'react'
import Calendar from './Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

const CalendarDropdown = ({ label, value, onChange }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    // document.addEventListener("mousedown", () => setIsDropDownOpen(false))
    useEffect(() => {
        return () => {
            // Unbind the event listener on clean up
            // document.removeEventListener("mousedown", () => setIsDropDownOpen(false))
        };
    }, [])

    const handleOnChange = (value) => {
        onChange(value)
    }

    return <div className="custom-dropdown">
        <h1>{label}</h1>
        <label onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {value || `${label} date`} <FontAwesomeIcon icon={faChevronDown} />
        </label>
        <div className={`calendar-dropdown ${isDropDownOpen? 'showCustomDropdown': 'hideCustomDropdown'}`}>
            <Calendar onChange={handleOnChange}/>
        </div>
    </div>
}

export default CalendarDropdown