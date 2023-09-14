import { useEffect, useState, useRef } from 'react'
import './App.css'
import ResidentCard from './components/ResidentCard'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './hooks/getRandomNumber'
import useFetch from './hooks/useFetch'



function App() {
const [inputValue, setInputValue] = useState( getRandomNumber(126))

const url = `https://rickandmortyapi.com/api/location/${inputValue}`
const [location, getLocation, hasError] = useFetch(url)

useEffect(()=> {
  getLocation()
},[inputValue])

const inputSearch = useRef()

const handleSubmit = e => {
  e.preventDefault()
  setInputValue(inputSearch.current.value.trim())
}

return (
<div >
  <h1 className='title'>Rick and Morty app</h1>
  <form  onSubmit={handleSubmit}>
    <input ref={inputSearch} type="text" />
    <button >Search</button>
  </form>
  {
    hasError
    ? <h2>HEY! YOU MUST PROVIDE AN ID FROM 1 TO 126</h2>
    : (
  <>
  <LocationInfo
    location={location}
  
  />
    

  <div>
    {
      location?.residents.map(url => (
      <ResidentCard
      key={url}
      url={url}
      />
      
      ))
    
    }
  </div>
  </>
    )
  }
</div> 


  )

}

export default App
