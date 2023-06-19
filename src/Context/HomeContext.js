import { createContext, useState, useEffect } from 'react'


const HomeContext = createContext();


function HomeContextProvider({children}){
    const [count, setCount] = useState(0)
    const [searchValue, setSearchValue] = useState('');
    const [isHomeAsideOpen, setIsHomeAsideOpen] = useState(false);
    const [productClicked, setProductClicked] = useState({});
    const [isShoppingCartClicked, setIsShoppingCartClicked] = useState(false)
    const [shoppingCartList, setShoppingCartList] = useState([]);
    
    const openHomeAside = () => {setIsHomeAsideOpen(true);}
    const closeHomeAside = () => {setIsHomeAsideOpen(false);}

    const displayProductDetail = () => {setIsShoppingCartClicked(false);}
    const displayShoppingCartList = () => {setIsShoppingCartClicked(true);}

    const addProductToShoppingCart = (product) => {setShoppingCartList(prev => [...prev, product]); console.log(shoppingCartList)}
    const deleteProductFromShoppingCart = (id) => {setShoppingCartList(prev => prev.filter((product) => (product.id !== id)))} 

    useEffect(() => setCount(shoppingCartList.length), [shoppingCartList]);

    return (
        <HomeContext.Provider value={{
            count,
            searchValue, 
            setSearchValue,
            isHomeAsideOpen, 
            openHomeAside,
            closeHomeAside,
            productClicked, 
            setProductClicked,
            shoppingCartList, 
            setShoppingCartList,
            isShoppingCartClicked,
            displayProductDetail,
            displayShoppingCartList,
            addProductToShoppingCart,
            deleteProductFromShoppingCart
        }}>
            {children}
        </HomeContext.Provider>
    )
}

export { HomeContext, HomeContextProvider };