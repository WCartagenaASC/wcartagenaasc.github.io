import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'

const About = () => {
    const[letterClass, setLetterClass]= useState('text-animate')
    const aboutArray = ['A','b','o','u','t', ' ', 'm','e']
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    return(
        <div className ='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={aboutArray} 
                        idx={15}
                    />
                </h1>
                <p>Hi, my name is Wesley Cartagena. I am looking for and open to any Software Engineering roles.</p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}

export default About