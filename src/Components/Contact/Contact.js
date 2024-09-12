import React from 'react'
import './Contact.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "37219963-f4ef-4b62-9261-5e55f744fe13");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <hr/>
            </div>
            <div className='contact-section'>
                <div className='contact-left'><h1>Let's talk</h1>
                <p>Can contact me anytime i will be there to help</p>
                <div className='contact-details'>
                    <div className='contact-detail'><MailOutlineIcon/><p>200314arya@gmail.com</p></div>
                    <div className='contact-detail'><LocationOnIcon/><p>Punjab, India</p></div>
                    <div className='contact-detail'><CallIcon/><p>623975**57</p></div>
                </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'></input>
                    <label>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email'></input>
                    <label>Write your message</label>
                    <textarea name='message' placeholder='Enter your message' rows='8'></textarea>
                    <button className='submit-btn' type='submit'>Submit Now</button>
                </form>
                </div>
       
    </div>
  )
}

export default Contact