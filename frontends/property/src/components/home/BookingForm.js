import { useState } from 'react'
import CalendarDropdown from '../common/CalendarDropdown'
import NumberDropdown from '../common/NumberDropdown'

const BookingForm = () => {
    const [checkIndate, setCheckinDate] = useState()
    const [checkoutdate, setCheckoutDate] = useState()

    return <section className="section--booking-form">
        <ul>
            <li>
                <CalendarDropdown label="check-in" value={checkIndate} onChange={setCheckinDate}/>
            </li>
            <li>
                <CalendarDropdown label="check-out" value={checkoutdate} onChange={setCheckoutDate}/>
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