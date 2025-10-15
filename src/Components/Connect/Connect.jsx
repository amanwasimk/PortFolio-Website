import React from 'react'
import './Connect.css'

export default function Connect() {
     
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef7f2d1f-3961-45f6-b78f-7b0f6dea0b77");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      setResult("Form Submitted Successfully");
      alert("mail sent Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert(data.message);
    }
    }
    return (
        <section id ="connectid" className="connect">
            <h1>Get In touch</h1>
            <div className="contact">
                <div className="talk">
                    <h2>Contact me</h2>
                    <p className='para'>Feel free to contact me , Great pleasure helping you</p>
                    <div className="email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(28, 63, 94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <p>amanwasimk@gmail.com</p>
                    </div>
                    <div className="number">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(28, 63, 94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <p>+91 8289978565</p>
                    </div>
                    <div className="address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(28, 63, 94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <p>Mathottam, Calicut, Kerala</p>
                    </div>
                </div>
                <form className="email-box" onSubmit={onSubmit}>
                    <div className="input-field">
                        <p>Your Name</p>
                        <input type="text" name="name" placeholder='Enter your name' required/>
                    </div>
                    <div className="input-field">
                        <p>Your Email</p>
                        <input type="email" name="email" placeholder='Enter your email' required/>
                    </div>
                    <div className="input-field">
                        <p>Your message</p>
                        <textarea name="message" placeholder='Write your message here' required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            
        </section>
    )
}