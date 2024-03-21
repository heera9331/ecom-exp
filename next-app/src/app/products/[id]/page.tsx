"use-client"
import axios from 'axios'
import Image from 'next/image'
// import React from 'react'

const fetchProduct = async(id:string)=>{
    try {
        
        const response = await axios.get(`http://localhost:3000/api/products/${id}`)
        if(response.data.status){
        return response.data.result}
    } catch (error:any) {
        console.log(error.message)
    }
}
export default async function SingleProduct({params}:{params:{id:string}}){
    const {id} = params
    fetchProduct(id)
    // console.log(id,"from 13")
    const response = await fetchProduct(id)
    const product = response
    if(!product){
        return "NotFound"
    }
    console.log(product)
  return (
    <>
    <div>
        <h1>Single Product Page</h1>

        <div className='max-w-96'>
            <h1>{product.name}</h1>
            <div className='w-fit rounded-md h-96'>
                <Image
                src={product.imageUrl}
                alt={product.name}
                width={"1000"}
                height={"1000"}
                className='w-full h-full object-contain rounded-md border-2'
                />
            </div>

            <p>{product.description}</p>
            <div>
                <p>msrp :- {product.msrp}</p>
                <p>Buy @ just {product.buyPrice}</p>

            </div>
        </div>


    </div>
    </>
  )
}

