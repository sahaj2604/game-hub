import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {error,data}=useGenres()
  return (
    <div>
        {error && <p>{error}</p>}
      {data.map(genre=><li key={genre.id}>{genre.name}</li>)}
    </div>
  )
}

export default GenreList

