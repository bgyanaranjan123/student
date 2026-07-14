import "./Header.css";
import {Link} from "react-router-dom"
function Header() {
  return (
    <header className="header">
      <div className="logo">QuickBite</div>

      <nav>
        <ul>
       
        <Link to="/"><li>Home</li></Link>   
        <Link to="/about"><li>About</li></Link>   
        <Link to="/restrant"><li>Resturant</li> </Link>
        <Link to="/offer"><li>Offer</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>

      <button className="signin">Sign In</button>
    </header>
  );
}

export default Header;