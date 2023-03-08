import { Link } from "react-router-dom";
import HeaderImage from "../assets/waffle.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HeaderImage})`}}>
      <div className="headerContainer">
        <h1>NiKa's Waffles</h1>
        <p>Address of Taste !</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;