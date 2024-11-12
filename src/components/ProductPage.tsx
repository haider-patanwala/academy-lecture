import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
async function fetchProduct() {
    // API Documentation
    // https://dummyjson.com/docs/product
    const data = await fetch("https://dummyjson.com/products", {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => data);

    return data;
}

const ProductPage = () => {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetchProduct().then((data) => setproduct(data.products));
    }, []);

    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">

            {/* <Signup /> */}

            <main className=' relative  justify-center grid grid-cols-3 gap-10 items-center text-center'>
                {product.map((data, i) => {
                    return (
                        <ProductCard
                            key={i}
                            props={data}
                        />
                    );
                })}
            </main>
        </div>
    )
}

export default ProductPage