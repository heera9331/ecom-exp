import { Cart } from "@/app/api/models";
import { NextRequest } from "next/server";
import { connectDB } from "@/utils"

export const GET = async (req: NextRequest, { params: { id } }: { params: any }) => {
    await connectDB();
    let customerId = id;
    if (!customerId) {
        return NextResponse.json({ error: "customer id is not found" });
    }
    try {
        let user = await Cart.findOne({ customerId: customerId });
        return NextResponse.json(user);
    } catch (eror) {
        return NextResponse.json(error: "database error");
    }

}