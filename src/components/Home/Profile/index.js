import './index.scss'
import profile from '../../../assets/images/Profile.png'



const Profile = () => {

    return(
        <div className='profile-container'>
            <div>
                <img className = "profile_pic" src = {profile} id = "pic" alt = "profile"/>
            </div>
        </div>
    );
}

export default Profile