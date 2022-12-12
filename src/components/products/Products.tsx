import "./products.scss"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from "../../models/productModel";
import { Link } from "react-router-dom";


interface Props {
  data:Product[] |null;
  loading:boolean
}

const Products = ({data,loading}:Props) => {
  
  return (
    <div>
      <div className="wrapper">
        {loading?<h1>loding</h1>:
          data?.slice(0,4).map((product:Product)=>
          <Link to={`/products/${product.id}` } style={{textDecoration:"none",color:"black"}}>
          
          <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} style={{width:"180px",height:"100px",objectFit:"contain"}} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
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
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, accusamus tempore dolores veniam eaque nihil voluptates commodi odit mollitia porro necessitatibus totam cupiditate a magni amet omnis sed atque nemo?
      Odit dolorum laborum distinctio ex recusandae autem nisi? Cupiditate, architecto ut. Quod illum sed odit veritatis sit neque saepe cum rem, dolor, voluptate fugiat similique, eaque eveniet qui. Laudantium, rem?
      Commodi reprehenderit exercitationem repellat, natus aliquam eveniet. Impedit aliquid accusamus incidunt a! Voluptatum amet, cum iste veniam omnis porro dignissimos vitae, illo ex, debitis totam nobis dolorum placeat voluptates inventore.
      Ducimus non, minima officia labore modi architecto animi corrupti? Voluptatum quis eius fuga autem alias, excepturi eveniet ratione modi earum accusamus dolores assumenda quia ipsa labore deserunt mollitia reiciendis libero!
      Quisquam fugiat natus illum, autem tenetur quos, est molestiae ex animi dolorem quo vitae consequuntur ipsam facilis ad quae odit molestias alias pariatur voluptatum odio, suscipit optio! Aut, ea distinctio!</p>
    </div>
  )
}

export default Products