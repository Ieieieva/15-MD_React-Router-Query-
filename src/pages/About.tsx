import "./About.css"
import rickAndMorty from "./images/RICKandMORTY.png"

export const About = () => {
  return (
    <div className="about__container">
      <h1 className="about__title">Rick and Morty Series</h1>
      <div className="about__info">
        <p className="about__paragraph">
          Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who 
          drags his inherently timid grandson on insanely dangerous adventures across the universe. Rick Sanchez is living with his daughter Beth`s 
          family and constantly bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic escapades. 
          <br></br>
          <br></br>
          Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer (Greek). 
          The series is created by Dan Harmon (Community) and Roiland, who also serve as executive producers.
        </p>
        <img 
          src={rickAndMorty}
          className="about__image">
        </img>
      </div>
    </div>
  )
}