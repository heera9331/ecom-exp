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
      <h1>Home</h1>
    </div>
  );
}
