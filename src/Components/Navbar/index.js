import { NavLink } from "react-router-dom";
import { Icons } from "../../Icons";

import './Navbar.css';
import { ShoppingCart } from "../ShoppingCart";

function Navbar({children}) {
    return(
        <nav>
            <ul>
                <li className="nav-item">
                    <NavLink 
                        to='/'>
                        {/* <Icons type=''/> */}
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        to='/food'>
                        Comida
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        to='/toys'>
                        Juguetes
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to='/clothes'>
                        Ropa
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to='/wellness'>
                        Bienestar
                    </NavLink>
                </li>
            </ul>

            <div className={`nav-item search-bar-container`}>
                {children}
            </div>

            <ul>
                <li className="nav-item">
                    <NavLink 
                        to='/'
                    >
                        <ShoppingCart/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to='/profile'
                    >
                        <img id="profilePhoto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Photo."/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };