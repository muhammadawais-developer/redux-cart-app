import React, { useState, useEffect } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchproducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products?limit=8')
            const data = await res.json()
            setProducts(data)
            console.log(products)
        }
        fetchproducts()
    }, [])

    return (
        <>
            <div className='productsWrapper'>{
                products.map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt="" />
                        <h4 >{product.title}</h4>
                        <h3 >{product.price} $</h3>
                        <button className='btn'>Add to Cart</button>

                    </div>
                ))
            }</div>
        </>
    )
}

export default Products