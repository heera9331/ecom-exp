import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export interface Product{
    "_id"?:string,
    "imageUrl":string,
    "name":string,
    "description":string,
    "buyPrice":number,
    "msrp":number
}

const Card = ({imageUrl,name,_id,description,buyPrice,msrp}:Product) => {
  return (
    <>
      <Link href={`/products/${_id}`}>
        <div className="bg-white">
          <h2 className="sr-only">Products</h2>
              <div className="w-64 border-2 border-pink-700 p-1">
                <div className="aspect-h-1 aspect-w-1 w-full border-2 border-green-500  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={imageUrl}
                    alt={name}
                    width="1000" 
                    height="1000"
                    className=" object-cover  group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{buyPrice}</p>
              </div>
          </div>
      </Link>
    </>
  )
}

export default Card