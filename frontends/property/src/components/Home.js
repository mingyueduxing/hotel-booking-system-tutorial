import { useEffect } from 'react'
import { connect } from 'react-redux'
import Carousel from './home/Carousel'
import Testimonial from './home/Testimonial'
import { loadImages } from '../state/images/actions'
import RoomSuites from './home/RoomSuites'
import BookingForm from './home/BookingForm'

const Home = ({ loadImages }) => {
    useEffect(loadImages)

    return (
        <main>
            <Carousel />
            <BookingForm />
            <RoomSuites />
            <Testimonial />
        </main>
    )
}

const mapStateToProps = () => ({})

const mapActionsToProps = {
    loadImages,
}

export default connect(mapStateToProps, mapActionsToProps)(Home)