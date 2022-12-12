import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./listing.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from "../../models/productModel";
import { Link } from "react-router-dom";


interface Props {
  data:Product[] |null;
  loading:boolean
}



const Listing = ({data,loading}:Props) => {


  return (
    <>
      <Navbar/>
      <h2>Products</h2>
      <div className="wrapper">
        {loading?<h1>loding</h1>:
          data?.map((product:Product)=>
          <Link to={`/products/${product.id}` } style={{textDecoration:"none",color:"black"}}>
            <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} style={{width:"180px",height:"100px",objectFit:"contain"}} />
                    <Card.Body>
            <Card.Title >{product.title}</Card.Title>
            <Card.Text>
              {product.price} $
            </Card.Text>
            <Button variant="primary">Details</Button>
                    </Card.Body>
              </Card>
          </Link>
          )
        }
      </div>
      <Footer/>
    </>
  )
}

export default Listing