"use client";
import { FormEvent, useState } from "react";
import { TextArea, Button, Input, AwsCard } from "@/components";
import axios from "axios";

const initialState = {
  name: "",
  description: "",
  file: "",
  imageUrl: "",
  quantity: 0,
  msrp: 0,
  buyPrice: 0,
};

const categories = [
  "clothes",
  "joggers",
  "tshirt",
  "shirt",
  "accessories",
  "jeans",
  "pants",
  "lower",
];

const tags = [
  "fashion",
  "men",
  "fashion",
  "women",
  "trading",
  "trand",
  "fashion 2024",
];

function Page() {
  const [product, setProduct] = useState(initialState);

  const addNow = async () => {
    console.log(product);
    let res = await axios.post("/api/products", { product });

    let data = await res.data;
    console.log(data);
    setProduct(initialState);
    alert("Successfully added product");
  };

  return (
    <div className="pb-20 pt-6 flex h-screen">
      <div className="min-w-[200px]"></div>
      <AwsCard
        showCardControls={false}
        title="Add a new product"
        cardProps="w-[500px] min-h-[650px] border border-black border-opacity-25 rounded-sm flex flex-col w-[80%]"
      >
        {/* Content of the second div */}
        <Input
          label="Name"
          htmlFor="name"
          placeholder="Enter name here..."
          value={product.name}
          type="text"
          onChange={(e: any) => {
            setProduct({ ...product, name: e.target.value });
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
            setProduct({ ...product, imageUrl: e.target.value });
          }}
        />

        <Input
          label="Quantity (Stock)"
          htmlFor="quantity"
          placeholder="Enter quantity here..."
          value={product.quantity}
          type="number"
          onChange={(e: any) => {
            setProduct({ ...product, quantity: Number(e.target.value) });
          }}
        />

        <Input
          label="MSRP (INR)"
          htmlFor="msrp"
          placeholder="Enter msrp here... (hidden from user)"
          value={product.msrp}
          type="number"
          onChange={(e: any) => {
            setProduct({ ...product, msrp: Number(e.target.value) });
          }}
        />

        <Input
          label="Buy Price"
          htmlFor="buyPrice"
          placeholder="Enter buy price here... (hidden from user)"
          value={product.buyPrice}
          type="number"
          onChange={(e: any) => {
            setProduct({ ...product, buyPrice: Number(e.target.value) });
          }}
        />

        <div className="px-2 pt-4">
          <Button
            className="bg-blue-700 text-white py-2 px-3"
            text="Save Changes"
            onClick={(e: any) => {
              e.preventDefault();
              addNow();
            }}
          />
        </div>
      </AwsCard>

      <div>
        <AwsCard title="Category" cardProps="h-fit w-[400px]">
          <div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                list="category"
                value={""}
                className="border p-1"
                placeholder="Category"
              />
            </div>
            <datalist id="category">
              {categories.map((category, idx) => {
                return (
                  <option key={idx} value={category}>
                    {category.toLocaleUpperCase()}
                  </option>
                );
              })}
            </datalist>
          </div>
        </AwsCard>
        <AwsCard title="Tags" cardProps="h-fit w-[400px]">
          <div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                list="tags"
                value={""}
                className="border p-1"
                placeholder="Tags"
              />
            </div>
            <datalist id="tags">
              {tags.map((tag, idx) => {
                return (
                  <option key={idx} value={tag}>
                    {tag.toLocaleUpperCase()}
                  </option>
                );
              })}
            </datalist>
          </div>
        </AwsCard>
        <AwsCard title="Short description" cardProps="h-fit w-[400px]">
          <div>
            <TextArea
              value=""
              onChange={(e) => {}}
              placeholder="Show description"
              label={"Short Description"}
              htmlFor={"shortDescription"}
            />
          </div>
        </AwsCard>
      </div>
    </div>
  );
}

export default Page;
