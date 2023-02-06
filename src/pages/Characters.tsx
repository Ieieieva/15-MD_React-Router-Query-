import axios from 'axios'
import { useState, useEffect } from 'react'
import "./Characters.css"
import { Outlet, Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

interface Card {
  id: number,
  image: string,
  name: string
}

const queryClient = new QueryClient()
console.log(queryClient)

export const Characters = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["characters"],
  //   queryFn: () => 
  //     axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then(({ data }) => {
  //       const characters = data.results;
  //       console.log(data)
  //       setCards(characters);
  //       console.log(characters);
  //     })
  // })
  // if (isLoading) return <span>Loading...</span>
  // if(error) return <span>Ooops, something went wrong... </span> 

  // const charactersQuery = useQuery({
  //   queryKey: ["characters"],
  //   queryFn: () => {
  //     axios.get('https://rickandmortyapi.com/api/character').then(({ data }) => {
  //       const characters = data.results;
  //       setCards(characters);
  //       console.log(characters);
  //     })
  //   }
  // })
  // console.log(charactersQuery)
  // if (charactersQuery.status === "loading") return <h1>Loading...</h1>
  // if (charactersQuery.status === "error") {
  //   return <h1>{JSON.stringify(charactersQuery.error)}</h1>
  // }


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

