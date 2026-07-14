import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">QuickBite</div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Resturent</li>
          <li>Offers</li>
          <li>About</li>
          
        </ul>
      </nav>

      <button className="signin">Sign In</button>
    </header>
  );
}

export default Header;