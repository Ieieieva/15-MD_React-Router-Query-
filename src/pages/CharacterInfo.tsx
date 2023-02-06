import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CharacterInfo.css'

interface IndividualCharacter {
  id: number,
  image: string,
  name: string,
  status: string,
  species: string,
  gender: string,
  origin: {
    name: string
  },
  location: {
    name: string
  },
  created: string
}

export const CharacterInfo = () => {
  const [characters, setCharacters] = useState<IndividualCharacter>({
    id: 0,
    image: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: {
      name: ''
    },
    location: {
      name: ''
    },
    created: ''
  })

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      console.log('dataresults' + data.name)
      console.log('data' + data);
      setCharacters(data);
    });
  }, [])

  return (
    <>
       <div className="character__container">
          <h2 className='character__name'>{characters.name}</h2>
          <div className='character__info'>
            <div className="character__info--left">
              <div className="character__descr">
                <h3 className='character__description'>{characters.status}</h3>
                <h3 className='character__description'>{characters.species}</h3>
                <h3 className='character__description'>{characters.gender}</h3>
              </div>
              <div className="character__additional">
                <h4 className='character__location'>Origin: {characters.origin.name}</h4>
                <h4 className='character__location'>Last known location: {characters.location.name}</h4>
                <span className='character__created'>Created: {characters.created}</span>
              </div>
            </div>
            <div className="character__info--right">
              <img
                src={characters.image}
                className='character__image'
              ></img>
            </div>
          </div>
        </div>
    </>
  )
}