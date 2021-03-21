import Carousel from './common/Carousel'
import BookingForm from './common/BookingForm'
import Testimonial from './common/Testimonial'
import RoomsList from './common/RoomsList'

const Home = () => {
    return (
        <main>
            <Carousel />
            <RoomsList />
            <BookingForm />
            <Testimonial />
        </main>
    )
}

export default Home