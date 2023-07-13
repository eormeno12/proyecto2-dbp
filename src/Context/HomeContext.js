import { createContext, useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../utils/request';
import { USER_ID_LOCAL_KEY } from '../constants';


const HomeContext = createContext();


function HomeContextProvider({children}){
    const [products, setProducts] = useState([]); 
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [count, setCount] = useState(0)
    const [searchValue, setSearchValue] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [isHomeAsideOpen, setIsHomeAsideOpen] = useState(false);
    const [productClicked, setProductClicked] = useState({});
    const [isShoppingCartClicked, setIsShoppingCartClicked] = useState(false)
    const [shoppingCartList, setShoppingCartList] = useState([]);
    const [signInUserId, setSignInUserId] = useState('');

    useEffect(() => {
        const storageUserId = localStorage.getItem(USER_ID_LOCAL_KEY, '');
        setSignInUserId(storageUserId)
    }, [])
    
    const openHomeAside = () => {setIsHomeAsideOpen(true);}
    const closeHomeAside = () => {setIsHomeAsideOpen(false);}

    const displayProductDetail = () => {setIsShoppingCartClicked(false);}
    const displayShoppingCartList = () => {setIsShoppingCartClicked(true);}

    const addProductToShoppingCart = (product) => {setShoppingCartList(prev => [...prev, product])}
    const deleteProductFromShoppingCart = (id) => {setShoppingCartList(prev => prev.filter((product) => (product.id !== id)))} 

    useEffect(() =>  {
        if(searchCategory == '')
            getProducts().then(products => setProducts(products));
        else
            getProductsByCategory(searchCategory).then(products => setProducts(products));

    }, [searchCategory]);

    useEffect(() => setFilteredProducts(
            products.filter(product => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()
        )
    )), [searchValue, products])

    useEffect(() => setCount(shoppingCartList.length), [shoppingCartList]);

    return (
        <HomeContext.Provider value={{
            filteredProducts,
            count,
            searchValue, 
            setSearchValue,
            setSearchCategory,
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
            deleteProductFromShoppingCart,
            signInUserId, 
            setSignInUserId
        }}>
            {children}
        </HomeContext.Provider>
    )
}

export { HomeContext, HomeContextProvider };