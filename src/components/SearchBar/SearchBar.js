import './SearchBar.css';
import React, { useState } from 'react';



const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        return product.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />

            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
            
            <ul>
                {filteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })}
            </ul>

        </div>
    )
}

export default SearchBar;