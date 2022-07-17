import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'

const Contact = () => {
  const[letterClass, setLetterClass]= useState('text-animate')
  const contactArray = ['Contact',' ','Me']
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
              <form class="contact-form" onSubmit={handleSubmit}>
                  <div className='contact-text-zone'>
                      <span>
                          <AnimatedLetters letterClass={letterClass}
                              strArray={contactArray} 
                              idx={15}
                          />
                      </span>             
                  </div>      
                  <input name="name" type="text" class="feedback-input" placeholder="Name" required/>   
                  <input name="email" type="email" class="feedback-input" placeholder="Email" required/>
                  <textarea name="text" class="feedback-input" placeholder="Comment" required></textarea>
                  <button type="submit" value="SUBMIT">{status}</button>
              </form>


            </div>
        </div>
    );
}

export default Contact

