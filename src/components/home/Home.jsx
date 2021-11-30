import Harshith from "../../assets/Harshith.jpg";
import "./home.css"

export const Home = () => {
    return (
        <div className="home">
            <div className="name">
                <h4>Hi, I'am</h4>
                <h1>HARSHITH C R</h1>
                <h1>I'm a Full stack web developer</h1>
                <button>My Resume</button>
            </div>
            <div className="image">
                <img src={Harshith} />
            </div>
        </div>
    )
}