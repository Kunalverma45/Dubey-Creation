import "./Footer.css";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="outerContainer">

        {/* Contact */}
        <div className="col1">
          <div className="innerCont" id="contact">
            <h3>Contact</h3>
            <div className='contactCont'>
              <div className="icon" ><IoLocationOutline /></div>
              <div>
                Address-1: G-332, Silicon city, Indore <br />
                Address-2: D2- 102, Sita Vallabh Market, Khargone
              </div>
            </div>

            <div className='contactCont'>
              <div className="icon" ><MdOutlineEmail /></div>
              <div>dubeycreations02@gmail.com</div>
            </div>

            <div className='contactCont'>
              <div className="icon" ><IoCallOutline /></div>
              <div>+918770726077</div>
            </div>

          </div>
        </div>

        {/* Collections */}
        <div className="col">
          <div className="innerCont" id="collections">
            <h3>Collections</h3>
            <div>
              <p>Bestsellers</p>
              <p>Feature Products</p>
              <p>New Arrivals</p>
            </div>
          </div>
        </div>


        {/* Useful Links */}
        <div className="col">

          <div className="innerCont" id="useFulLinks">
            <h3>Useful Links</h3>
            <div>
                <a href="">About Us</a> <br/>
            <a href="">Contact Us</a>
            </div>
          
          </div>
        </div>

        {/* Social */}
        <div className="col" id="col4">
          <div className="innerCont" id="socials">
            <h3>Social</h3>
            <div className="logos">
              <div className="fb">
                <a href="">
                  <FaFacebook />
                </a>
              </div>

              <div className="twitter">
                <a href="">
                  <FaTwitter />
                </a>
              </div>

              <div className="linkedin">
                <a href="">
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="insta">
                <a href="">
                  < FaInstagram />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer