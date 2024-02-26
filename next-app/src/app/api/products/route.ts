import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server"
import { Product } from "@/app/api/models";


connectDB();

export const GET = async (req: NextRequest, res: NextResponse) => {
    let products = await Product.find({});
    return new NextResponse({ products });
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    req = await req.json();
    let product = req.product;
    product.sellerId = "65d64189a3d53c3da3097e60";
    console.log('product', product);
    // todo
    // add seller id in product object

    if (!product) {
        return new NextResponse({ error: "product not found" });
    }
    let ack = await Product.insertMany([product]);
    console.log(ack);

    return new NextRequest({ ack });
}

export const UPDATE = async (req: NextRequest, res: NextResponse) => {
    req = await req.json();
    let updated = req.product;
    let id = req.id;

    if (!product) {
        return new NextResponse({ error: "product not found that will be update" });
    }

    if (!id) {
        return new NextResponse({ error: "product id not found that will be update" });
    }

    let ack = await Product.updateOne({}, { updated })

    if (ack) {
        return new NextResponse({ ack });
    }

    return new NextResponse.json({ error: "database error" });
}