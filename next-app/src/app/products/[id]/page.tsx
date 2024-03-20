"use-client"
import Button from '@/components/Button'
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
    const{name,imageUrl,description, msrp, buyPrice} = product
    
    return (
    <>
    <div>
        <h1>Single Product Page</h1>

        <div className='w-full border-2  justify-around flex '>
            <div className='w-fit rounded-md h-96'>
                <Image
                src={imageUrl}
                alt={name}
                width={"1000"}
                height={"1000"}
                className='w-full h-full object-contain rounded-md border-2'
                />
                <div className='mt-6 flex justify-between items-center'>
                    <Button text='Buy Now' />
                    <Button text = "Add to cart"/>
                </div>
            </div>
            <div className='border-2'>
                <h1 className='text-6xl font-medium '>{name}</h1>
        
                <div className='mt-10'><p>{description}</p></div>
                <div className='mt-40'>
                    <p>msrp :- {msrp}</p>
                    <p>Buy @ just {buyPrice}</p>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

