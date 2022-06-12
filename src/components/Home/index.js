import './index.scss';
import { Link} from 'react-router-dom';

const Home = () => {
 
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                Wesley Cartagena
                <br />
                IT Developer
                </h1>
                <h2>Developer/ JavaScript / HTML / CSS / React / Python</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    );

}
export default Home