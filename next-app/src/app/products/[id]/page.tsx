"use-client"
import Button from '@/components/Button'
import axios from 'axios'
import Image from 'next/image'
// import React from 'react'

const fetchProduct = async (id: string) => {
    try {

        const response = await axios.get(`http://localhost:3000/api/products/${id}`)
        if (response.data.status) {
            return response.data.result
        }
    } catch (error: any) {
        console.log(error.message)
    }
}
export default async function SingleProduct({ params }: { params: { id: string } }) {
    const { id } = params
    fetchProduct(id)
    // console.log(id,"from 13")
    const response = await fetchProduct(id)
    const product = response
    if (!product) {
        return "NotFound"
    }
    console.log(product)
    const { name, imageUrl, description, msrp, buyPrice } = product

    return (
        <>
            <div>
                <h1>Single Product Page</h1>

                <div className='w-full border-2 md:flex md:p-10'>
                    <div className='w-fit rounded-md h-[100%] border-2 p-10'>
                        <div className='min-w-[350px] max-w-[350px]'>
                            <Image
                                src={imageUrl}
                                alt={name}
                                width={"1000"}
                                height={"1000"}
                                className='w-full h-full object-contain rounded-md'
                            />
                            <div className='mt-6 flex gap-4 justify-center'>
                                <Button text='Buy Now' className='px-3 py-2' />
                                <Button text="Add to cart" className='px-3 py-2' />
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <h1 className='text-6xl font-medium '>{name.toLocaleUpperCase()}</h1>
                        <div className='my-2'>
                            <p>MRP :- {msrp}</p>
                            <p>Buy @ just {buyPrice}</p>
                        </div>
                        <div className='my-5'>
                            <p className='my-2'>The Redmi Note 13 Pro+ 5G is a symphony of innovation, luxury, and power. With Fusion Design, a 3D Curved AMOLED Display, In-Display Fingerprint Sensor, Sharp 1.5K Resolution, Flagship IP68 Protection, Elegance Meets Endurance, True 200 MP With OIS, 120 W HyperCharge, and the Global Debut of the MediaTek Dimensity 7200 Ultra-5G, this SuperNote transcends the realm of smartphones.  masterpiece that blends art and technology seamlessly, offering an unparalleled experience that goes beyond expectations. Elevate your mobile journey with the Redmi Note 13 Pro+ 5G - where innovation meets perfection.</p>
                            <p className='py-2'>
                                <strong>Highlights - </strong>
                                8 GB RAM | 256 GB ROM
                                16.94 cm (6.67 inch) Display
                                200MP (OIS) + 8MP + 2MP | 16MP Front Camera
                                5000 mAh Battery
                                Dimensity 7200 Ultra 5G Processor
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

