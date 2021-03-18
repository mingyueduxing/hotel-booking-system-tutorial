import { Link } from 'react-router-dom'

const Header = () => <header>
    <h1>hotel name</h1>
    <section>
        <nav>
            <li><Link to="/">home</Link></li>
            <li><Link to="/rooms">rooms & suites</Link></li>
        </nav>
        <button>book now</button>
    </section>
</header>

export default Header