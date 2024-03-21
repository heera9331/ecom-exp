import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils";
import { Product } from "../../models";



const GET = async (req: NextRequest, res: NextResponse) => {
    await connectDB();
    const query: string = req.nextUrl.searchParams.get('query') || "";

    // const { searchTerm } = req.query; // Assuming the search term is passed as a query parameter
    // const pageSize = req.query.pageSize || 15;
    // const currentPage = req.query.currentPage || 1;
    // const orderBy = req.query.orderBy || "name";
    // const order = req.query.order || "asc";

    // Now you can use searchTerm to perform your search in the database or wherever you need

    try {
        // Perform search operation using searchTerm
        // const searchResults = await Product.find({ name: searchTerm }).skip(pageSize * (currentPage - 1)).limit(15)
        const products: any[] = await Product.find({ name: query })
        // Example: const searchResults = await searchInDatabase(searchTerm);

        // Once you have search results, you can send them back as a response
        return NextResponse.json({ products });
    } catch (error) {
        console.error("Error occurred during search:", error);
        return NextResponse.json({ error: "Internal server error" });
    }
}