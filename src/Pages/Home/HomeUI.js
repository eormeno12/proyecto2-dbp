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
    const {isHomeAsideOpen, isShoppingCartClicked} = useContext(HomeContext);

    const [searchValue, setSearchValue] = useState('');

    return(
        <div className="home-container">
            <Navbar>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            </Navbar>

            <div className={`home-content ${isHomeAsideOpen && 'home-content-w-detail'}`}>
                <ProductsList>
                    <li>
                        <ProductCard productData={{'id': '1', 'stock': '20', 'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dicta iusto mollitia labore, explicabo repellendus voluptatum expedita sed, ab aut officiis, omnis optio magnam eaque ipsam odio! Animi, veniam maiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dicta iusto mollitia labore, explicabo repellendus voluptatum expedita sed, ab aut officiis, omnis optio magnam eaque ipsam odio! Animi, veniam maiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dicta iusto mollitia labore, explicabo repellendus voluptatum expedita sed, ab aut officiis, omnis optio magnam eaque ipsam odio! Animi, veniam maiores.', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                    <li>
                        <ProductCard productData={{'id': '2', 'stock': '20', 'description': 'Description', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                    <li>
                        <ProductCard productData={{'id': '3', 'stock': '20', 'description': 'Description', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                    <li>
                        <ProductCard productData={{'id': '4', 'stock': '20', 'description': 'Description', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                    <li>
                        <ProductCard productData={{'id': '5', 'stock': '20', 'description': 'Description', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                    <li>
                        <ProductCard productData={{'id': '6', 'stock': '20', 'description': 'Description', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                    <li>
                        <ProductCard productData={{'id': '7', 'stock': '20', 'description': 'Description', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                    <li>
                        <ProductCard productData={{'id': '8', 'stock': '20', 'description': 'Description', 'name':'product dfdsfsd sdfsdf sdfsdfsdfsdf  sdfsdfdsfs', 'category':'category', 'price':50, 'image':'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png'}}/>
                    </li>
                

                </ProductsList>

                {isHomeAsideOpen && (isShoppingCartClicked ? <ShoppingCartList /> : <ProductDetail/>)}
            </div>
        </div>
    ); 
}

export { HomeUI };