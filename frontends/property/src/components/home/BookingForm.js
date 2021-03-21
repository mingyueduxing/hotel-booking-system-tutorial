import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CalendarList from '../common/CalendarList'

const BookingForm = () => {
    const [showCalendar, setShowCalendar] = useState(false)

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar)
    }

    return <section className="section--booking-form">
        <ul>
            <li>
                <h1>check-in</h1>
                <p onClick={toggleCalendar}>
                check-in date
                <FontAwesomeIcon icon={faChevronDown} />
                </p>
            </li>
            <li>
                <h1>check-out</h1>
                <p onClick={toggleCalendar}>
                check-out date
                <FontAwesomeIcon icon={faChevronDown} />
                </p>
            </li>
            <li>
                <h1>adults</h1>
                <p>
                1
                <FontAwesomeIcon icon={faChevronDown} />
                </p>
            </li>
            <li>
                <h1>children</h1>
                <p>
                    0
                <FontAwesomeIcon icon={faChevronDown} />
                </p>
            </li>
            <li><button>check availability</button></li>
            {showCalendar && <div className="modal"><CalendarList /></div>}
        </ul>
    </section>
}

export default BookingForm