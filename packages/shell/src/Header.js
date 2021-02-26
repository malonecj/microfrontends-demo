import React from "react";
import { Link } from "react-router-dom";
import Logo from './logo';

const Header = () => (<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-bark mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <Logo />
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">

      <Link to="/home" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
        Microfrontends @ Gumtree
    </Link>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
        <li className="nav-item">
          <Link to="/home" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            Home
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/ads?category=cars" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            Cars
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/ads?category=for-sale" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            For Sale
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/ads?category=jobs" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            Jobs
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/ads?category=pets" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            Pets
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/ads?category=properties" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            Properties
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
export default Header;
