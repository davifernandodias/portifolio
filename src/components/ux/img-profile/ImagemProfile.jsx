import './imagemProfile.css';

import Profile from "../../../assets/profile_photo.svg" 

function ImagemProfile() {
    return (
        <img src={Profile} alt="profile_photo" className='image-profile' />
    );
}

export default ImagemProfile;
