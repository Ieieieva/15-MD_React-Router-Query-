import './Home.css'
import imageToAdd from "./images/title.png"


export const Home = () => {
  return (
    <div className='home__container'>
      <img 
        className="title__image"
        src={imageToAdd}/>
    </div>
  )
}