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
    </div>
  );
}
