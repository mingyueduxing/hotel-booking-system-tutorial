import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMapMarkerAlt,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
    <footer>
        <section>
            <h1>hotel name</h1>
            <p>While the Modern Hotel is neither the oldest nor the biggest one in Indianapolis or Indiana, we've got our own considerably long history of upholding a benchmark level of quality. Our biggest advantage over other hotels in the city is our balanced approach. With just 35 rooms, we're a quiet place to stay at.</p>
        </section>
        <section>
            <h2>contact us</h2>
            <address>
                <FontAwesomeIcon icon={faMapMarkerAlt} />1 sydney street, Sydney
            </address>
            <p><FontAwesomeIcon icon={faPhone} />04123123</p>
            <p><FontAwesomeIcon icon={faEnvelope} />info@hotel.com</p>
        </section>
    </footer>
)

export default Footer