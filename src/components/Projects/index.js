import './index.scss';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'


const Projects = () => {
    const[letterClass,setLetterClass]= useState('text-animate')
    const aboutArray = ['Projects']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout()
    }, []);
    return(
    
        <section class="container projects-page">
            <div class='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={aboutArray} 
                        idx={15}
                    />
                </h1>
            </div>
            <section class="container Projects">
                <div class='projects' id='project1'>
                    hello
                </div>
                <div class='projects' id='project2'>
                    
                </div>  
                <div class='projects' id='project3'>
                    
                </div>  
                <div class='projects' id='project4'>
                
                </div>  
            </section>
        </section>
    );
}
export default Projects