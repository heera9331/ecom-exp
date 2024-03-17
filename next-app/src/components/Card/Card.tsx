import React from 'react'
export interface Product{
    "_id":string,
    "imageUrl":string,
    "name":string,
    "description":string,
    "buyPrice":number,
    "msrp":number
}

const Card = ({imageUrl,name,description,buyPrice,_id,msrp}) => {
  return (
    <>
        <div>
            <Image
        </div>
    
    </>
  )
}

export default Card