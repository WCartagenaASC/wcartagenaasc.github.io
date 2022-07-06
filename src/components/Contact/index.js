import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'

const Contact = () => {
  const[letterClass, setLetterClass]= useState('text-animate')
  const contactArray = ['C','o','n','t','a','c','t',' ','M','e']
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
    return(
        <div className ='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={contactArray} 
                        idx={15}
                    />
                </h1>
                <div className="info">
                    Wesley Cartagena,
                    <br />
                    New York,
                    <br />
                    <span>wesley.cartagena23@outlook.com</span>
                </div>                
            </div>
        </div>
    );
}

export default Contact

