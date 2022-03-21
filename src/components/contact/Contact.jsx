import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react"
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context"
import { useContext } from 'react';
const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_llr8fca', 'template_7w4hau8', formRef.current, '9bG1VZB-MtIDU1ZT_')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <div className="c">
           <div className="c-bg"></div>
           <div className="c-wrapper">
               <div className="c-left">
               <h1 className="c-title">Let's talk</h1>
                   <div className="c-info">
                       <div className="c-info-item">
                           <img src={Phone} alt="" className="c-icon" />
                           214-707-4642
                           <img src={Email} alt="" className="c-icon" />
                           Hcscott22@gmail.com
                           <img src={Address} alt="" className="c-icon" />
                           Austin, Tx
                       </div>
                   </div>
               </div>
               <div className="c-right">
                    <p className="c-desc">
                    <b>Get in touch.</b> Fill out the form below to contact me directly.
                    </p>
                    <form ref = {formRef} onSubmit={handleSubmit}>
                       <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/> 
                       <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/> 
                       <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/> 
                       <textarea style = {{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name ="message"/>
                       <button>Submit</button>
                       {done && "Thank you"}
                    </form>
               </div>
           </div>
        </div>
    )
}

export default Contact