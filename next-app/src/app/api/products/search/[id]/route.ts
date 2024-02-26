import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils";
import { Product } from "@/app/api/models";


connectDB();

const GET = async (req: NextRequest, res: NextResponse) => {
    req = await req.json();
    let id = req;

    // Now you can use searchTerm to perform your search in the database or wherever you need

    try {
        let service = await Product.findById(id);
        // Perform search operation using searchTerm
        return new NextResponse({ service })
    } catch (error) {
        console.error("Error occurred during search:", error);
        return new NextResponse.json({ error: "Internal Server Error" });
    }
}