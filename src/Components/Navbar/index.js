import { NavLink } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart";


import './Navbar.css';
import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { Icons } from "../../Icons";

function Navbar({children}) {
    const {setSearchCategory, signInUserId} = useContext(HomeContext);

    const onCategoryClick = (category) => {setSearchCategory(category)}

    return(
        <nav>
            <ul>
                <li className="nav-item">
                    <NavLink 
                        onClick={() => onCategoryClick('')}
                        to='/'>
                        <Icons iconType='logo' size="48px" width='120px'/>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        onClick={() => onCategoryClick('Food')}
                        to='/food'>
                        Comida
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        onClick={() => onCategoryClick('Toys')}
                        to='/toys'>
                        Juguetes
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        onClick={() => onCategoryClick('Clothes')}
                        to='/clothes'>
                        Ropa
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        onClick={() => onCategoryClick('Welfare')}
                        to='/welfare'>
                        Bienestar
                    </NavLink>
                </li>
            </ul>

            <div className={`nav-item search-bar-container`}>
                {children}
            </div>

            <ul>
                <li className="nav-item">
                    <ShoppingCart/>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to={signInUserId ? '/my-profile' : '/sign-in'}
                    >
                        <img id="profilePhoto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Photo."/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };