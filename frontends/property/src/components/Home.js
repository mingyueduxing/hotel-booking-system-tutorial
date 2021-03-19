import Carousel from './common/Carousel'
import BookingForm from './common/BookingForm'
import Testimonial from './common/Testimonial'
import RoomSection from './common/RoomSection';

const Home = () => {
    return (
        <main>
            <Carousel />
            <RoomSection />
            <BookingForm />
            <Testimonial />
        </main>
    )
}

export default Home