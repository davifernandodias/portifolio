import './header.css';
import { IoMdHome } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import ButtonContact from '../ux/button-contact/Button-contact';





function Header() {
    return (
        <header className='header-content'>
            <div className='header-item'>
            <IoMdHome className='home-icon'/>
            <FaLinkedin  className='home-icon'/>
            <FaGithub className='home-icon'/>
            <MdContactPage className='home-icon'/>
            <div class="space-line"></div>
            <ButtonContact/>
            </div>
        </header>
    )
}

export default Header;
