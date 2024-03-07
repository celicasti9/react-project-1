import { createContext, useState } from "react";

import productsData from '../data/products.json'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState(productsData)
    const [ids, setIds] = useState(productsData.length + 1)

    return (
        <ProductContext.Provider value={{ products, setProducts, ids, setIds}}>
            {children}
        </ProductContext.Provider>

    )
}

export { ProductContext, ProductProvider}