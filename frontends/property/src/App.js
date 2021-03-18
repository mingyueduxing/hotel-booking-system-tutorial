import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.scss'

function App() {
  const [hotel, setHotel] = useState({})
  useEffect(() => {
    fetch('http://localhost:3000/api/hotel')
      .then(response => response.json())
      .then(data => setHotel(data))
  }, [])

  if (!hotel) return <h1>...Loading</h1>

  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/rooms" exact component={Rooms} />
      <Footer />
    </Router>
  );
}

export default App;
