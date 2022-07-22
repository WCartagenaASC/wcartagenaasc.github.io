import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index';
import Profile from './Profile'
import profile from '../../assets/images/Profile.png'

const Home = () => {
    const[letterClass, setLetterClass]= useState('text-animate')
    const nameArray = [' ','Wesley',' ','Cartagena']
    const jobArray = ['Software',' ','Developer']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout()
    }, []);

    return(
        
        <section class="container home-page">
            <div class="text-zone" id="text">
                <h1>
                <span className={letterClass}>Hi,</span>
                <br/>
                <span className={`${letterClass} _13`}>I'm</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Developer / JavaScript / HTML / CSS / React / Python</h2>
                <Link to="contact" className="flat-button">Contact Me</Link>
            </div>
            {/*<Profile />*/}
            <img class = "text-zone" src = {profile} id = "pic" alt = "profile"/>
        </section>
        
    );

}
export default Home