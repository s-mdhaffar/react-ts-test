import "./footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer"> 
      <div className="social">
        <a href="http://facebook.com"><FacebookIcon sx={{color: "#FFFFFF"}} /></a>
        <a href="http://instagram.com"><InstagramIcon sx={{color: "#FFFFFF"}}/></a>
      </div>
      <form className="newsletter">
        <span>Sign up for our newsletter</span>
        <input type="text" placeholder="Email address" />
        <button>SUBSCRIBE</button>
      </form>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima fuga nemo sint voluptatem perferendis qui aspernatur incidunt deserunt velit hic voluptate assumenda eos eius, id alias aut sit mollitia?
      </p>
    </div>
  )
}

export default Footer