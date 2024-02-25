import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server"
import { Product } from "@/app/api/models";


connectDB();

export const GET = async (req: NextRequest, res: NextResponse) => {
    let products = await Product.find({});
    return new NextResponse({ products });
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    let product = req.body.product;
    console.log(product);
    // todo
    // add seller id in product object

    if (!product) {
        return new NextResponse({ error: "product not found" });
    }
    let ack = await Product.insertMany([product]);

    return new NextRequest({ ack });
}
