import Product from "../../models/productModel";
import "./detail.scss"
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import * as React from "react";

interface Props {
  data:Product[] |null;
  loading:boolean
}
type QuizParams = {
  id: string;
};

// In order to implement that, I'd apply my type to the hook when calling it.



const Detail = ({data,loading}:Props) => {

  const [cart, setCart] = React.useState([])

  const handleAdd=(e: { preventdefault: () => void; })=>{
    const newItem={
      title:product?.title,
      image:product?.image,
      price:product?.price
    }
    
  }

  const { id } = useParams<QuizParams>();
  const product=data?.find(prod=>prod.id===Number(id))
  return (
    <div className="detail">
      <Navbar/>
      <div className="container">
        <img src={product?.image} alt="" />
        <div className="info">
          <h1>{product?.title}</h1>
          <h3>{product?.price} $</h3>
          <button>Add to cart</button>
        </div>
      </div>
      
    </div>
  )
}

export default Detail