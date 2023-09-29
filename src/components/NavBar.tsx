import "./styling.scss";
import logo from "../assets/logo.svg";
export const NavBar = () => <nav>
    <img src={logo} alt="logo" />
    <ul>
        <li className="BR14"><a>Solar vs lunar</a></li>
        <li className="BR14"><a>Mechanics of an eclipse</a></li>
        <li className="BR14"><a>Safety while watching an eclipse</a></li>
    </ul>
</nav>


