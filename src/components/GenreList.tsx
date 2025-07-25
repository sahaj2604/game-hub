import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {error,genres}=useGenres()
  return (
    <div>
        {error && <p>{error}</p>}
      {genres.map(genre=><li key={genre.id}>{genre.name}</li>)}
    </div>
  )
}

export default GenreList

