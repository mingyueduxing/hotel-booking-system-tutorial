import CalendarDropdown from '../common/CalendarDropdown'
import NumberDropdown from '../common/NumberDropdown'

const BookingForm = () => {
    return <section className="section--booking-form">
        <ul>
            <li>
                <CalendarDropdown label="check-in"/>
            </li>
            <li>
                <CalendarDropdown label="check-out"/>
            </li>
            <li>
                <NumberDropdown label="adults" />
            </li>
            <li>
                <NumberDropdown label="children" />
            </li>
            <li><button>check availability</button></li>
        </ul>
    </section>
}

export default BookingForm