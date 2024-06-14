import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";

import Header from './Header'
import { useState } from "react";


const Contact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [textarea,setTextArea] = useState('')


    const submitForm = (e)=>{
        e.preventDefault()
        
    }

    return (
    <div className="contact-container">
        <Header />
        <div className="contact-card-container">
            <div className="message-container">
                <form onSubmit={submitForm}>
                    <label>
                        Name:<br/>
                        <input type="text" value={name} name = 'name' onChange= {(e)=>setName(e.target.value)}/>
                    </label>
                    <label>
                        Email:<br/>
                        <input type="email"  value ={email} name="email" onChange= {(e)=>setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Message:<br/>
                        <textarea name="message" value={textarea} onChange= {(e)=>setTextArea(e.target.value)}></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
                <h3>Form is just to show purpose u can contact me by clicking below icons</h3>
            </div>

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
                    <a href="https://wa.me/+918008554899" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="icon" />
                    </a>
                    <p>Whatsapp</p>
                </div>
                <div>
                    <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                        <IoIosMail className="icon" />
                    </a>
                    <p>vijenderchimma424@gmail.com</p>
                </div>
            </div>
        </div>
    </div>

)
}
export default Contact