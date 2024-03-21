import { Cart } from "@/app/api/models";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    let cartData = await Cart.find({});
    return NextResponse.json(cartData);
}
