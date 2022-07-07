import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'

const About = () => {
    const[letterClass,setLetterClass]= useState('text-animate')
    const aboutArray = ['A','b','o','u','t', ' ', 'm','e']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout()
    }, []);
    return(
        <div className ='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={aboutArray} 
                        idx={15}
                    />
                </h1>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}

export default About