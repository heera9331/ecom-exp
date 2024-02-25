import Link from "next/link";

function Page() {
    return (
        <div>
            <h1 className="text-2xl font-semibold">Seller Page</h1>
            <Link href={'/seller/add-product'}>1. Add Product</Link>
            <h2>2. seller products display here...</h2>
        </div>
    );
}

export default Page;