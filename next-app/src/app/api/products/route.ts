import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server"
import { Product } from "@/app/api/models";


connectDB();

export const GET = async (req: NextRequest, res: NextResponse) => {
    console.log("get woprrrrrrrrrrrrrrrrrking")
    let products:any = await Product.find({});
    return  NextResponse.json({ products });
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    let product = body.product;
    product.sellerId = "65d64189a3d53c3da3097e60";
    console.log('product', product);
    // todo
    // add seller id in product object

    if (!product) {
        return  NextResponse.json({ error: "product not found" });
    }
    let ack = await Product.insertMany([product]);
    console.log(ack);

    return  NextResponse.json({ ack });
}

