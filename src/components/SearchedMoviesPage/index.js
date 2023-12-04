// src/pages/SearchedMoviesPage.js

import {useState} from 'react'
import MovieGrid from '../MovieGrid'
import {searchMovies} from '../UtilsApi'

const SearchedMoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchInitiated, setSearchInitiated] = useState(false)

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      searchMovies(searchQuery)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
          setSearchInitiated(true)
        })
        .catch(error => console.error('Error searching movies:', error))
    }
  }

  return (
    <div>
      <h2>Searched Movies Page</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {searchInitiated && <MovieGrid movies={searchResults} />}
    </div>
  )
}

export default SearchedMoviesPage
