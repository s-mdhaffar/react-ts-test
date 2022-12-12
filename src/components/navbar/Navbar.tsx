import "./navbar.scss"
import { Link } from "react-router-dom";
import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Sidecart from "../sidecart/Sidecart";


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="navbar">
      <h1>Fashion World</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      
      <AddShoppingCartIcon onClick={toggleDrawer}/>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                >
                <Sidecart/>
            </Drawer>
              </nav>
    </div>
  )
}

export default Navbar