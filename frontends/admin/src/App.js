import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

import './styles/index.scss'

function App() {
  return (
    <Router >
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
