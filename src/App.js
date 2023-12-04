import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import PopularPage from './components/PopularPage'
import TopRatedPage from './components/TopRatedPage'
import UpcomingPage from './components/UpcomingPage'
import MovieDetailsPage from './components/MovieDetailsPage'

import './App.css'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={PopularPage} />
      <Route exact path="/top-rated" component={TopRatedPage} />
      <Route exact path="/upcoming" component={UpcomingPage} />
      <Route path="/movie/:movieId" component={MovieDetailsPage} />
    </Switch>
  </Router>
)

export default App
