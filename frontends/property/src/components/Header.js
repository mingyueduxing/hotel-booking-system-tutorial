import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({ name }) => <header>
    <h1>{name}</h1>
    <section>
        <nav>
            <li><Link to="/">home</Link></li>
            <li><Link to="/rooms">rooms & suites</Link></li>
        </nav>
        <button>book now</button>
    </section>
</header>

const mapStateToProps = (state) => {
    const { hotel: { hotel: { name } } } = state
    return {
        name
    }
}

export default connect(mapStateToProps, {})(Header)