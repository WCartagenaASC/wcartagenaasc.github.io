import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'

const Contact = () => {
  const[letterClass, setLetterClass]= useState('text-animate')
  const contactArray = ['C','o','n','t','a','c','t',' ','M','e']
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout()
    }, []);
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return(
        <div className ='container contact-page'>
            <div class="form-container">
              <div className='contact-text-zone'>
                  <h1>
                      <AnimatedLetters letterClass={letterClass}
                          strArray={contactArray} 
                          idx={15}
                      />
                  </h1>             
              </div>
                <form class="contact-form" onSubmit={handleSubmit}>
                  <input type="text" id="name" placeholder="Full name" required />
                  <input type="email" id="email" placeholder="Email"required />
                  <input type="subject" id="subject" placeholder="Subject"required />
                  <textarea id="message" placeholder="message" cols="30" rows="10" required ></textarea>
                  <button type="submit">{status}</button>
                </form>
            </div>
        </div>
    );
}

export default Contact

