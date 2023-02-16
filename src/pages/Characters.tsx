import axios from 'axios'
import { useState, useEffect } from 'react'
import "./Characters.css"
import { Outlet, Link } from "react-router-dom"

interface Card {
  id: number,
  image: string,
  name: string
}

export const Characters = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then(({ data }) => {
      const characters = data.results;
      setCards(characters);
    });
  }, [page])

  return (
    <div className="characters__container">
      <h1 className="characters__title">Characters</h1>
      <section className='cards__container'>
        {cards.map((card: Card) => {
          return (
            <Link 
              to={`${card.id}`} 
              className="card">
              <div 
                key={card.id}
                >
                  <img
                    className='card__image'
                    src={card.image}>
                  </img>
                  <h3
                    className='card__name'>
                    {card.name}
                  </h3>
              </div>
            </Link>
          )
        })}
        <Outlet />
      </section>
      <div className='button__wrapper'>
        <button 
          className='button'
          type='button'
          onClick={() => {
            setPage(page - 1)
            console.log('page' + page)
          }}>
          Previous
        </button>
        <button 
          className='button'
          type='button'
          onClick={() => {
            setPage(page + 1)
            console.log('page' + page)
          }}>
          Next
        </button>
      </div>
    </div>
  )
}

