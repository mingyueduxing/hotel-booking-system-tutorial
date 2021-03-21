import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const CalendarDropdown = ({ label, value }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    return <div className="custom-dropdown">
        <h1>{label}</h1>
        <label onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {value || `${label} date`} <FontAwesomeIcon icon={faChevronDown} />
        </label>
        <div className={`calendar-dropdown ${isDropDownOpen? 'showCustomDropdown': 'hideCustomDropdown'}`}>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    </div>
}

export default CalendarDropdown