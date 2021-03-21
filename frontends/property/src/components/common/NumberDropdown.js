import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NumberDropdown = ({ label, value }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    return <div className="custom-dropdown">
        <h1>{label}</h1>
        <label onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {value || 1} <FontAwesomeIcon icon={faChevronDown} />
        </label>
        <div className={`number-dropdown ${isDropDownOpen? 'showCustomDropdown': 'hideCustomDropdown'}`}>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    </div>
}

export default NumberDropdown