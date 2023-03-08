import "../styles/About.css"
import AboutImage from "../assets/about.png"

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}>
      </div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, animi dignissimos. Iste consequuntur ratione nostrum. Ex culpa impedit beatae quidem ab repellendus alias perspiciatis, ipsam dolorum vitae ut aliquid assumenda, pariatur consequuntur, quam voluptas nostrum a harum consequatur? Rerum ab magnam inventore sint molestiae provident dolore asperiores expedita esse aliquid.</p>
      </div>
    </div>
  )
}

export default About;