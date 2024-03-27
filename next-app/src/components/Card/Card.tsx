import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export interface Product {
  "_id"?: string,
  "imageUrl": string,
  "name": string,
  "description": string,
  "buyPrice": number,
  "msrp": number
}

const Card = ({ imageUrl, name, _id, description, buyPrice, msrp }: Product) => {
  return (
    <>
      <Link href={`/products/${_id}`} className='border-2 h-[500px] w-full bg-white rounded-md hover:shadow-lg flex justify-stretch p-6 hover:scale-[1.01] relative'>
        <div className="">
          <h2 className="sr-only">Products</h2>
          <div className="w-64 p-1">
            <div className="h-[350px]">
              <Image
                src={imageUrl}
                alt={name}
                width="1000"
                height="1000"
                className=" object-cover  group-hover:opacity-75 h-full"
              />
            </div>
            <div className='absolute bottom-0 border-t-2 w-full pt-[-30px]'>
              <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{buyPrice}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card