import './header.css';
import { IoMdHome } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import ButtonContact from '../ux/button-contact/Button-contact';

function Header() {
    return (
        <header className='header-content'>
            <div className='header-item'>
                <IoMdHome className='home-icon'/>
                <div className="tooltip">Home</div>
            </div>

            <div className='space-line'></div>

            <div className='header-item'>
                <FaLinkedin className='home-icon'/>
                <div className="tooltip">LinkedIn</div>
            </div>

            <div className='header-item'>
                <FaGithub className='home-icon'/>
                <div className="tooltip">GitHub</div>
            </div>

            <div className='header-item'>
                <MdContactPage className='home-icon'/>
                <div className="tooltip">Contact</div>
            </div>

            <div className='space-line'></div>

            <ButtonContact />
        </header>
    );
}

export default Header;
