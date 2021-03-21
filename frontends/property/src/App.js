import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Header from './components/Header'
import Footer from './components/Footer'
import { loadHotel } from './state/hotel/actions'

import './styles/index.scss'

function App({ loading, loadHotel }) {
  useEffect(loadHotel, [])

  if (loading) return <h1>...Loading</h1>

  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/rooms" exact component={Rooms} />
      <Footer />
    </Router>
  );
}
const mapStateToProps = (state) => {
  const { hotel: { hotel: { loading, error } } } = state
  return {
    loading,
    error
  }
}

const mapActionsToProps = {
  loadHotel,
}

export default connect(mapStateToProps, mapActionsToProps)(App);
