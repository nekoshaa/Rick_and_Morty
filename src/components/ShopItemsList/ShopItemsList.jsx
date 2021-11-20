import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShopItem from '../ShopItem/ShopItem'
import ShopItemModal from '../ShopItem/ShopItemModal'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button } from 'react-bootstrap'



const ShopItemsList = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [character, setCharacter] = useState({})
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [value, setValue] = useState('')
  const [pageAmount, setPageAmount] = useState('')
  const [page, setPage] = useState(1)
  const [response, setResponse] = useState({})
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  //const [endPoint, setEndPoint] = useState('https://rickandmortyapi.com/api/character/')


  const scrollHandler = (e) => {
    console.log('scroll')
  }


  const filterCharachers = characters.filter(character => {
    return character.name.toLowerCase().includes(value.toLocaleLowerCase())
  })


  const fetchData = () => {
    setIsLoading(true)
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(function (response) {
        setResponse(response.data)
        setCharacters(response.data.results)
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
    fetchData('scroll', scrollHandler)
    setPageAmount(response.info?.pages || 1)
    if (page == 1) {
      setPrevBtnDisabled(true)
    }
    if (page == pageAmount) {
      setNextBtnDisabled(true)
    }
  }, [page])

  return (

    <>
      <Button disabled={prevBtnDisabled} onClick={() => { setPage(page - 1) }}>Prev page</Button>
      <Button disabled={nextBtnDisabled} onClick={() => { setPage(page + 1) }}>Next page</Button>
      <h1>Total pages: {pageAmount}</h1>
      <h1>Current page: {page}</h1>
      <form className='search'>
        <input
          type='text'
          placeholder='Найти персонажа...'
          onChange={(event) => setValue(event.target.value)}
        />

      </form>
      <ShopItemModal show={isModalOpen} character={character} onHide={() => { setIsModalOpen(false) }} />
      {filterCharachers.map((character) => {
        return <ShopItem
          key={character.id}
          onButtonClick={
            () => {
              setCharacter(character)
              setIsModalOpen(true)
            }
          }
          origin={character.origin}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          image={character.image}
          location={character.location.name}
          url={character.url}
          episode={character.episode}
          episode={character.created} />
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
      <Button disabled={prevBtnDisabled} onClick={() => { setPage(page - 1) }}>Prev page</Button>
      <Button disabled={nextBtnDisabled} onClick={() => { setPage(page + 1) }}>Next page</Button>
    </>
  )

}

export default ShopItemsList
