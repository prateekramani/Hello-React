import { logo_url } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("use state is called from header");
  }, []);


  const onlineStatus = useOnlineStatus()

  return (
    <div className="flex justify-between shadow-md m-10">
      <div className="logo-container">
        <img className="w-56" src={logo_url}></img>
      </div>
      <div className="flex items-center" >
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">
            Online Status {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Body</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login w-16 h-9 bg-slate-200 hover:drop-shadow-lg rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
