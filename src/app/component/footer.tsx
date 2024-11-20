import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import "../style/footer.css"


const Footer=()=>{
    return(
    <footer className="footer">
        <div className="footer-maindiv">
          <a className="footer-a">
            
            <span className="footer-span1">Sara Atif</span>
          </a>
          <p className="footer-para">
            © 2024 saraatif
        </p>
          <span className="footer-span2">
            <Link href={"https://www.facebook.com/"} target="blank" className="footer-fb-link">
            <FaSquareFacebook className="footer-fbicon" />
            </Link>

            <Link href={"https://www.linkedin.com/in/sara-atif-636852316/"} target="blank" className="footer-ld-link">
      <IoLogoLinkedin className="footer-ldicon"/>
      </Link>
      
            
            
            
          </span>
        </div>
      </footer>
      
        

      

    )
}
export default Footer;