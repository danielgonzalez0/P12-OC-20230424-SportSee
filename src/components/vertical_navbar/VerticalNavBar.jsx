import React from 'react';
import { NavLink } from 'react-router-dom';
import icon1 from "../vertical_navbar/icon-nav-1.png"
import icon2 from "../vertical_navbar/icon-nav-2.png"
import icon3 from "../vertical_navbar/icon-nav-3.png"
import icon4 from "../vertical_navbar/icon-nav-4.png"

const VerticalNavBar = () => {
  return (
    <nav className='verticalNavbar'>
      <ul>
        <NavLink>
            <li>
                <img src={icon1} alt="icon-navigation-1" />
            </li>
        </NavLink>
        <NavLink>
            <li>
                <img src={icon2} alt="icon-navigation-2" />
            </li>
        </NavLink>
        <NavLink>
            <li>
                <img src={icon3} alt="icon-navigation-3" />
            </li>
        </NavLink>
        <NavLink>
            <li>
                <img src={icon4} alt="icon-navigation-4" />
            </li>
        </NavLink>
      </ul>
      <span>Copiryght, SportSee 2020</span>
    </nav>
  );
};

export default VerticalNavBar;
