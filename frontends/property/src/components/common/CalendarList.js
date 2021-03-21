import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from './Calendar'

const CalendarList = () => (
    <div className="calendar-list">
        <div className="calendar-list__header">
            <ul>
                <li><FontAwesomeIcon icon={faChevronLeft} />prev</li>
                <li>today</li>
                <li>next<FontAwesomeIcon icon={faChevronRight} /></li>
            </ul>
        </div>
        <div className="calendar-list__content">
            <Calendar />
            <Calendar />
        </div>
    </div>
)

export default CalendarList