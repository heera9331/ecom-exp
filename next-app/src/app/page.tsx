import Card, { Product } from "@/components/Card/Card";
import axios from "axios";

const fetchData = async ()=>{
  const response = await axios.get('http://localhost:3000/api/products')
  console.log(response)
  const data =  response.data
  return data.products
}

export default async function Home() {
  const dataArray = await fetchData()
  console.log(dataArray)


  return (
    <div>
      <div>
        <h1>
          Product Page
        </h1>
      </div>
      <div>
        <h2>{dataArray.map((item:any)=> <div key={item._id}><Card imageUrl={item.imageUrl} buyPrice={item.buyPrice} name={item.name} description={item.description} msrp={item.msrp}/></div>)}</h2>
      </div>
    </div>
  );
}
