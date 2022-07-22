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
                <p id ="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales. Pretium fusce id velit ut tortor pretium viverra suspendisse. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Id consectetur purus ut faucibus pulvinar elementum integer enim. At ultrices mi tempus imperdiet nulla malesuada. Imperdiet massa tincidunt nunc pulvinar. Leo urna molestie at elementum eu facilisis. Urna neque viverra justo nec. Enim tortor at auctor urna. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Nunc sed velit dignissim sodales ut eu sem. Duis convallis convallis tellus id interdum velit laoreet. Vitae congue mauris rhoncus aenean vel. Nunc sed blandit libero volutpat sed. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.</p>
                <p id ="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales. Pretium fusce id velit ut tortor pretium viverra suspendisse. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Id consectetur purus ut faucibus pulvinar elementum integer enim. At ultrices mi tempus imperdiet nulla malesuada. Imperdiet massa tincidunt nunc pulvinar. Leo urna molestie at elementum eu facilisis. Urna neque viverra justo nec. Enim tortor at auctor urna. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Nunc sed velit dignissim sodales ut eu sem. Duis convallis convallis tellus id interdum velit laoreet. Vitae congue mauris rhoncus aenean vel. Nunc sed blandit libero volutpat sed. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.</p>
                <p id ="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales. Pretium fusce id velit ut tortor pretium viverra suspendisse. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Id consectetur purus ut faucibus pulvinar elementum integer enim. At ultrices mi tempus imperdiet nulla malesuada. Imperdiet massa tincidunt nunc pulvinar. Leo urna molestie at elementum eu facilisis. Urna neque viverra justo nec. Enim tortor at auctor urna. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Nunc sed velit dignissim sodales ut eu sem. Duis convallis convallis tellus id interdum velit laoreet. Vitae congue mauris rhoncus aenean vel. Nunc sed blandit libero volutpat sed. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.</p>
            </div>
        </div>
    );
}

export default About