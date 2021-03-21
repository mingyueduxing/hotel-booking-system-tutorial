import { useEffect } from 'react'
import { connect } from 'react-redux'
import Carousel from './common/Carousel'
import BookingForm from './common/BookingForm'
import Testimonial from './common/Testimonial'
import { loadImages } from '../state/images/actions'
import RoomsList from './common/RoomsList'

const Home = ({ loadImages }) => {
    useEffect(loadImages)

    return (
        <main>
            <Carousel />
            <RoomsList />
            <BookingForm />
            <Testimonial />
        </main>
    )
}

const mapStateToProps = (state) => ({})

const mapActionsToProps = {
    loadImages
}

export default connect(mapStateToProps, mapActionsToProps)(Home)