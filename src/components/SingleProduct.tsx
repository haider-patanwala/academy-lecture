import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function handleBuy(form) {
    return fetch("http://localhost:3001/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: form.email,
            order: form.order,
        }),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        });
}
const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchSingleProduct = async (id) => {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await response.json()
            setProduct(data)
            return data
        }
        fetchSingleProduct(Number(id))
    }, [id])


    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    return (
        <div className="container mx-auto my-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 flex justify-center items-center border-2 border-red-900">
                <img src={product?.images[0]} alt={product.title} className="max-h-[400px] object-contain" />
            </div>
            <div className="md:w-1/2 px-6 py-10">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold mr-2">${product.price}</span>
                    <span className="text-gray-500 line-through mr-2">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                        {product.discountPercentage}% off
                    </span>
                </div>
                <div className="flex items-center mb-6">
                    <span className="text-gray-500 mr-2">Rating:</span>
                    <span className="text-yellow-500 font-bold">{product.rating}</span>
                </div>
                <div className="flex items-center mb-6">
                    <span className="text-gray-500 mr-2">Brand:</span>
                    <span>{product.brand}</span>
                </div>
                <div className="flex items-center mb-6">
                    <span className="text-gray-500 mr-2">Category:</span>
                    <span>{product.category}</span>
                </div>
                <div className='flex items-center mb-6'>
                    <span className='text-gray-500 mr-2'>Stock : </span>
                    <span>{product.stock}</span>
                </div>

                <p className='bg-red-600 rounded text-white px-4 py-2 cursor-pointer' onClick={() => handleBuy({ email: "haider@edquest.propp", order: product })}>
                    Buy Product
                </p>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                    {product.reviews.map((review, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500 font-bold mr-2">{review.rating}</span>
                                <span className="text-gray-500">{review.reviewerName}</span>
                            </div>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct