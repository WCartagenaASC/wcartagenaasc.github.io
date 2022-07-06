import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index';
import Profile from './Profile'
//import profile from '../../assets/images/Profile.png'

const Home = () => {
    const[letterClass, setLetterClass]= useState('text-animate')
    const nameArray = [' ','W','e','s','l','e','y',' ','C','a','r','t','a','g','e','n','a']
    const jobArray = ['I','T',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Developer/ JavaScript / HTML / CSS / React / Python / Test</h2>
                <Link to="contact" className="flat-button">Contact Me</Link>
            </div>
            <Profile />
        </div>
        
    );

}
export default Home