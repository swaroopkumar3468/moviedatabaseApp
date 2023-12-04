import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {fetchMovieDetails, fetchMovieCredits} from '../UtilsApi'

const MovieDetailsPage = () => {
  const {movieId} = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [castDetails, setCastDetails] = useState([])

  useEffect(() => {
    // Fetch movie details
    fetchMovieDetails(movieId)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error))

    // Fetch cast details
    fetchMovieCredits(movieId)
      .then(response => response.json())
      .then(data => setCastDetails(data.cast))
      .catch(error => console.error('Error fetching cast details:', error))
  }, [movieId])

  if (!movieDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>

      {/* Movie Details Section */}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <p>Ratings: {movieDetails.vote_average}</p>
        <p>Duration: {movieDetails.runtime} minutes</p>
        <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        <p>Release Date: {movieDetails.release_date}</p>
        <p>Overview: {movieDetails.overview}</p>
      </div>

      {/* Cast Details Section */}
      <div>
        <h3>Cast</h3>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {castDetails.map(castMember => (
            <div
              key={castMember.id}
              style={{margin: '10px', textAlign: 'center'}}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                alt={castMember.name}
              />
              <p>{castMember.original_name}</p>
              <p>{castMember.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage
