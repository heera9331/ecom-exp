
interface Product {
    _id: string,
    name: string,
    description: string,
    imageUrl: string,
    quantity: number,
    buyPrice: number,
    msrp: number,
    sellerId: string,
}

export type { Product }