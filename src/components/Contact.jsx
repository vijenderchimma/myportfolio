import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import Header from './Header'


const Contact = () => (
    <div className="contact-container">
        <Header />
        <div className="contact-card-container">
            <div className="icon-container">
                <div>
                    <a href="https://www.instagram.com/vijenderchimma/" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
                    <p>Instagram</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/vijender-chimma/" target="_blank" rel="noreferrer"><FaLinkedin className="icon" /></a>
                    <p>Linked In</p>
                </div>
                <div>
                    <a href="https://wa.me/+919640314024" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="icon" />
                    </a>
                    <p>Whatsapp</p>
                </div>
            </div>
            <p>Copyright <FaRegCopyright />. All rights reserved.</p>
        </div>
    </div>

)
export default Contact