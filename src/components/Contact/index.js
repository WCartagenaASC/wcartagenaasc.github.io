import './index.scss'
import AnimatedLetters from '../AnimatedLetters/Index'

const Contact = () => {
    return(
        <div className ='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['C','o','n','t','a', 'c', 't']} 
                        idx={15}
                    />
                </h1>
            </div>
        </div>
    );
}

export default Contact