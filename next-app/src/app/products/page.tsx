
import Card, { Product } from "@/components/Card/Card";
import axios from "axios";

const categories = ["Clothes", "Tshirt", "Shirt", "Jogger", "Accessories"]

const fetchData = async () => {
  const response = await axios.get('http://localhost:3000/api/products')
  const data = response.data
  return data.products
}

export default async function Home() {
  const dataArray = await fetchData()



  return (
    <div className="bg-gray-200 px-2 py-4">
      <h1 className="font-semibold text-3xl">Our Products</h1>
      <div className="flex py-5 border-2">
        <div className="flex flex-wrap gap-2">
          {dataArray && dataArray.map((item: Product) =>
            <div key={item._id}>
              {/* render card when image url avaiable */}
              <Card _id={item._id}
                imageUrl={item.imageUrl}
                buyPrice={item.buyPrice}
                name={item.name}
                description={item.description}
                msrp={item.msrp} />
            </div>
          )}
        </div>
      </div>
      <hr />

      <section className="my-10 py-4 bg-sky-200/50">
        <div className="flex items-center flex-col">
          <h2 className="font-semibold text-2xl my-1">Browse Products by Categories</h2>        
          <div className="bg-sky-500 h-[2px] w-[200px] "></div>
        </div>
        
        
        <div className="my-4 flex gap-3 flex-wrap items-center justify-center">
          {categories.map((category:any, idx:number)=>{
            return <a href={`products/${category}`} key={idx}>   
            <div key={idx} className="w-[250px] h-[250px] shadow-md hover:shadow-lg bg-white p-2">
              {/* category image */}
              <div className=""></div>
              {/* category title */}
              <h2 className="text-xl text-center font-semibold">{category}</h2>
            </div>
            </a>
          })}
        </div>
      </section>

      
      <hr />
    </div>
  );
}
