import { useState } from "react"
import { connect } from 'react-redux'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Carousel = ({ images, loading, error }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const prev = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    const next = () => {
        if (currentImageIndex < images.length - 1) {
            console.log(currentImageIndex)
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    const isPrevDisabled = () => {
        return currentImageIndex === 0
    }

    const isNextDisabled = () => {
        return currentImageIndex === images.length - 1
    }

    if (loading) return <h1>...Loading</h1>
    if (error) return <h1>...Something wrong happend</h1>

    return <section className="carousel">
        <ul>
            {images.map((image, index) => (
                index === currentImageIndex &&
                <li key={image.id}>
                    <img src={image.url} alt='hotel banner images' />
                </li>
            ))}
        </ul>
        <ul>
            {images.map((image, index) => (
                <li key={image.id}
                    className={index === currentImageIndex ? 'active' : ''}
                    onClick={() => setCurrentImageIndex(index)} />
            ))}
        </ul>
        <ul>
            <li>
                <FontAwesomeIcon
                className={isPrevDisabled() ? 'disabled': ''}
                    icon={faChevronLeft}
                    onClick={prev} />
            </li>
            <li>
                <FontAwesomeIcon
                    className={isNextDisabled() ? 'disabled': ''}
                    icon={faChevronRight}
                    onClick={next} />
            </li>
        </ul>
    </section>
}

const mapStateToProps = (state) => {
    const { images: { loading, images, error } } = state
    const hotelImages = images.filter(image => image.type === 'hotel')
    return {
        loading,
        error,
        images: hotelImages
    }
}

const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(Carousel)