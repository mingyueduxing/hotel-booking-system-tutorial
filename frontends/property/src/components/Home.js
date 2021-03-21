import { useEffect } from 'react'
import { connect } from 'react-redux'
import Carousel from './common/Carousel'
import BookingForm from './common/BookingForm'
import Testimonial from './common/Testimonial'
import { loadImages } from '../state/images/actions'

const Home = ({ loadImages }) => {
    useEffect(loadImages)

    return (
        <main>
            <Carousel />
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