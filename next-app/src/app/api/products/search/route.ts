import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils";
import { Product } from "../../models";


connectDB();

const GET = async (req: NextRequest, res: NextResponse) => {
    const { searchTerm } = req.query; // Assuming the search term is passed as a query parameter
    const pageSize = req.query.pageSize || 15;
    const currentPage = req.query.currentPage || 1;
    const orderBy = req.query.orderBy || "name";
    const order = req.query.order || "asc";

    // Now you can use searchTerm to perform your search in the database or wherever you need

    try {
        // Perform search operation using searchTerm
        const searchResults = await Product.find({ name: searchTerm }).skip(pageSize * (currentPage - 1)).limit(15)
        // Example: const searchResults = await searchInDatabase(searchTerm);

        // Once you have search results, you can send them back as a response
        return res.json({ results: searchResults });
    } catch (error) {
        console.error("Error occurred during search:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}