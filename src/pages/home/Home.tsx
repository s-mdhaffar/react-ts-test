import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Products from "../../components/products/Products"
import Product from "../../models/productModel"
import "./home.scss"

interface Props {
  data:Product[] |null;
  loading:boolean
}

const Home = ({data,loading}:Props) => {

  
  

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Products data={data} loading={loading} />
      <Footer/>
    </div>
  )
}

export default Home