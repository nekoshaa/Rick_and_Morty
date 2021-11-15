import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShopItem from '../ShopItem/ShopItem'


const ShopItemsList = () => {

  const [video, setPhotosList] = useState([])
  const [character, setCharacter] = useState([])
  const [episode, setEpisode] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [value, setValue] = useState("")

  const filterCharachers = character.filter(characters => {
    return characters.name.toLowerCase().includes(value.toLocaleLowerCase())
  })


  const fetchData = () => {
    setIsLoading(true)
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        setCharacter(response.data.results)
        console.log(response);
        // setPhotosList(response.data)
        // setIsLoading(false)
      })
      .catch(function (error) {
        console.log(error);
        // setErrorMsg(error)
        // setIsError(true)
        // setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    <>
      <form className='search'>
        <input
          type='text'
          placeholder='Найти персонажа...'
          onChange={(event) => setValue(event.target.value)}
        />

      </form>
      {filterCharachers.map((character) => {
        return <ShopItem key={character.image} name={character.name} status={character.status} species={character.species} gender={character.gender} image={character.image} location={character.location.name} url={character.url} episode={character.created} />




      })}
      {/* {isLoading
        ?
        <h1>Loading...</h1>
        :
        isError 
        ? 
        <h1>{errorMsg}</h1>
        :
        <div className="wrappedFlex">
          {video.map((videos) => {
            return <ShopItem key={videos.videoId} title={videos.title} published={videos.publishedAt} description={videos.description} src={videos.thumbnail} videoId={videos.videoId} />
          })}
        </div>
      } */}
    </>
  )

}

export default ShopItemsList
