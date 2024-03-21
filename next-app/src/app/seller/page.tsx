import Link from "next/link";

function Page() {
    return (
        <div>
            <h1 className="text-2xl font-semibold">Seller Page</h1>
            <div className="flex flex-col gap-1 py-2">
                <Link href={'/seller/add-product'} className="text-blue-800 underline font-semibold">1. Add Product</Link>
                <h2>2. seller products display here...</h2></div>
        </div>
    );
}

export default Page;