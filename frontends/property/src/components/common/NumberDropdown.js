import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const NumberDropdown = ({ label, value }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    document.addEventListener("mousedown", () => setIsDropDownOpen(false))
    useEffect(() => {
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", () => setIsDropDownOpen(false))
        };
    }, [])
    return <div className="custom-dropdown">
        <h1>{label}</h1>
        <label onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {value || 1} <FontAwesomeIcon icon={faChevronDown} />
        </label>
        <div className={`number-dropdown ${isDropDownOpen? 'showCustomDropdown': 'hideCustomDropdown'}`}>
            <ul>
                {numbers().map(item => <li index={item}>{item}</li>)}
            </ul>
        </div>
    </div>
}

const numbers = () => {
    const res = []
    for(let i = 0; i < 10; i++) res.push(i)
    return res
}

export default NumberDropdown