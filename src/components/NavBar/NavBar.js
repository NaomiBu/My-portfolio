import "./NavBar.css"
import React from "react";
import {faBars, faTimes} from "react-icons/fa"

const NavBar = () => {
const links = [
  {id:1,
  link: 'home'},
  {id:2,
    link: 'about'},
    {id:3,
      link: 'projects'},
      {id:4,
        link: 'contact'}
]
  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
    <div> 
      <h1 className="text-5x1 font-signature ml-2">NB</h1> 
    </div>
    <ul className="flex">
      {links.map(({id, link}) =>(
        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"> {link} </li>
      ))}

    </ul>
  </nav>
  );
}

export default NavBar