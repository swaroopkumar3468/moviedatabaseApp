import {useEffect, useState} from 'react'
import './index.css'
import MovieGrid from '../MovieGrid'
import {fetchPopularMovies} from '../UtilsApi'

const PopularPage = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchPopularMovies(currentPage)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        setTotalPages(data.total_pages)
      })
      .catch(error => console.error('Error fetching popular movies:', error))
  }, [currentPage])

  return (
    <div>
      <h1>movieDB</h1>
      <h2>Popular</h2>
      <MovieGrid movies={movies} />

      {totalPages > 1 && (
        <div className="pagination pagination-button:hover">
          <button
            className="pagination-button"
            type="button"
            onClick={() =>
              setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="pagination-span">{currentPage}</span>
          <button
            className="pagination-button"
            type="button"
            onClick={() =>
              setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default PopularPage
