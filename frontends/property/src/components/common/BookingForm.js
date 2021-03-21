import Calendar from "./Calendar";

const BookingForm = () => <section className="section--booking-form">
    <ul>
        <li>checkin</li>
        <li>checkout</li>
        <li>adults</li>
        <li>children</li>
        <li><button>check availability</button></li>
    </ul>
    <Calendar />
</section>

export default BookingForm