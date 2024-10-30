import { logo_url } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo_url}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
