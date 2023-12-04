import {Link} from 'react-router-dom'
import SearchedMoviesPage from '../SearchedMoviesPage'

import './index.css'

const Navbar = () => (
  <>
    <nav>
      <div className="navbar-container">
        <div>
          <h1>movieDB</h1>
        </div>
        <div className="navbar-links">
          <Link to="/">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div className="navbar-search">
          <SearchedMoviesPage />
        </div>
      </div>
    </nav>
  </>
)
export default Navbar
