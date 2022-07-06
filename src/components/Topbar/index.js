import './index.scss'
import LogoW from '../../assets/images/W.png'
import LogoSubtitle from '../../assets/images/cartagena.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'



const Topbar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to = '/'>
                <img className="letter-logo" src={LogoW} alt="Logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="Cartagena"/>
            </Link>
            <nav classname="nav-links">
                <NavLink exact="true" activeclassname="active" id="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" id="about-link" to="about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" id="contact-link" to="contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" id="contact-link" to="contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <div class="Social-List">
            <ul id="horizontal-list">
                <li>
                    <a
                        href="https://www.linkedin.com/in/wesley-cartagena-870603126/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/wcartagenaasc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            </div>
        </div>
    ) 
}
export default Topbar