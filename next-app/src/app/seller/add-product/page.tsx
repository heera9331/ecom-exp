"use client"
import { FormEvent, useState } from "react";
import { TextArea, Button, Input } from "@/components";
import axios from "axios";

function Page() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        file: "",
        imageUrl: "",
        quantity: 0,
        msrp: 0,
        buyPrice: 0,
    });

    const addNow = async () => {
        console.log(product);
        let res = await axios.post('/api/products', { product });

        let data = await res.data;
        console.log(data);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-semibold">Enter product details here...</h1>
            <div className="w-[500px] h-[650px] bg-gray-100 p-2 border border-black border-opacity-25 rounded-sm flex flex-col">
                {/* Content of the second div */}
                <Input
                    label="Name"
                    htmlFor="name"
                    placeholder="Enter name here..."
                    value={product.name}
                    type="text"
                    onChange={(e: any) => {
                        setProduct({ ...product, name: e.target.value })
                    }}
                />

                <TextArea
                    label="Description"
                    htmlFor="description"
                    placeholder="Enter description here..."
                    value={product.description}
                    onChange={(e) => {
                        setProduct({ ...product, description: e.target.value });
                    }}
                />
                <Input
                    label="Image Url"
                    htmlFor="imageUrl"
                    placeholder="Enter product image url (make sure product image is public or accessible from without any problem)"
                    value={product.imageUrl}
                    onChange={(e: any) => {
                        setProduct({ ...product, imageUrl: e.target.value })
                    }}
                />

                <Input
                    label="Quantity (Stock)"
                    htmlFor="quantity"
                    placeholder="Enter quantity here..."
                    value={product.quantity}
                    type="number"
                    onChange={(e: any) => {
                        setProduct({ ...product, quantity: Number(e.target.value) })
                    }}
                />

                <Input
                    label="MSRP (INR)"
                    htmlFor="msrp"
                    placeholder="Enter msrp here... (hidden from user)"
                    value={product.msrp}
                    type="number"
                    onChange={(e: any) => {
                        setProduct({ ...product, msrp: Number(e.target.value) })
                    }}
                />

                <Input
                    label="Buy Price"
                    htmlFor="buyPrice"
                    placeholder="Enter buy price here... (hidden from user)"
                    value={product.buyPrice}
                    type="number"
                    onChange={(e: any) => {
                        setProduct({ ...product, buyPrice: Number(e.target.value) })
                    }}
                />


                <div className="flex flex-col gap-2 items-center justify-center">
                    <Button
                        text="Add Product"
                        onClick={(e: any) => {
                            e.preventDefault();
                            addNow();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
