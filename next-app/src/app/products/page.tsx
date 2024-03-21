import Card, { Product } from "@/components/Card/Card";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get('http://localhost:3000/api/products')
  console.log(response)
  const data = response.data
  return data.products
}

export default async function Home() {
  const dataArray = await fetchData()
  console.log(dataArray)


  return (
    <div>
      <h1 className="font-semibold text-2xl">Our Products</h1>
      <div className=" flex justify-center items-center py-5 border-2 border-blue-500">
        <div className="w-4/5 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-2 border-red-500">
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
    </div>
  );
}
