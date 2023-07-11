import { useContext, useState } from "react";
import { Navbar } from "../../Components/Navbar";
import { SearchBar } from "../../Components/SearchBar";
import { ProductsList } from "../../Components/ProductsList";
import { ProductCard } from "../../Components/ProductCard";
import { HomeContext } from "../../Context/HomeContext";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartList } from "../../Components/ShoppingCartList";

import './Home.css';

function HomeUI(){
    const {isHomeAsideOpen, isShoppingCartClicked, filteredProducts, searchValue, setSearchValue} = useContext(HomeContext);

    return(
        <div className="home-container">
            <Navbar>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            </Navbar>

            <div className={`home-content ${isHomeAsideOpen && 'home-content-w-detail'}`}>
                <ProductsList>
                    {filteredProducts.map(product => <li key={product.id}><ProductCard productData={product}/></li>)}
                </ProductsList>

                {isHomeAsideOpen && (
                    isShoppingCartClicked 
                        ? <ShoppingCartList /> 
                        : <ProductDetail/>)}
            </div>
        </div>
    ); 
}

export { HomeUI };