import { Icons } from "../../Icons";

import './SearchBar.css'

function SearchBar({searchValue, setSearchValue}) {

    return (
        <div className='input-wrapper'>
            <input 
                className='input-search'
                placeholder="Buscar producto"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />

            <Icons iconType='search' color='#a1a1a1' type='search'/>
        </div>
    );
}

export { SearchBar };