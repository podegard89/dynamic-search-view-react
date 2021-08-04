import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';

const getProducts = async () => {
    let response = await fetch(`https://fakestoreapi.com/products`);
    let jsonArray = await response.json();
    return jsonArray;
}

const App = () => {

    const [productsState, setProductsState] = useState([]);

    useEffect(async () => {
        let fetchedProducts = await getProducts();
        let newProductsState = fetchedProducts.map((product) => {
            return product.title;
        })
        setProductsState(newProductsState);
    }, [])

    const areProductsLoaded = productsState.length > 0;

    const loadingLogo = <img alt="React Loading logo" src="images/reactLoading.gif"></img>;

    return (
        <div>
            {areProductsLoaded ? <SearchBar products={productsState} /> : loadingLogo}
        </div>
    )
}

export default App;