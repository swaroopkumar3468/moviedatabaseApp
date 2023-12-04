import {useEffect, useState} from 'react'
import './index.css'
import MovieGrid from '../MovieGrid'
import {fetchUpcomingMovies} from '../UtilsApi'

const UpcomingPage = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchUpcomingMovies(currentPage)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching upcoming movies:', error))
  }, [currentPage])

  return (
    <div>
      <h2>Upcoming</h2>
      <MovieGrid movies={movies} />

      <div className="pagination pagination-button:hover">
        <button
          className="pagination-button"
          type="button"
          onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
        >
          Prev
        </button>
        <span className="pagination-span">{currentPage}</span>
        <button
          className="pagination-button"
          type="button"
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default UpcomingPage
