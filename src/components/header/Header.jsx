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
            <FaLinkedin 
                className='home-icon' 
                onClick={() => window.open('https://www.linkedin.com/in/davifernandodias/', '_blank')}/>
                <div className="tooltip">LinkedIn</div>
            </div>

            <div className='header-item'>
                <FaGithub className='home-icon'
                onClick={() => window.open('https://github.com/davifernandodias', '_blank')}/>
                <div className="tooltip">GitHub</div>
            </div>

            <div className='header-item'>
                <MdContactPage className='home-icon'
                onClick={() => window.location.href = 'https://download937.mediafire.com/2iabgnehno3gaLgGgdSe5ZAr2cgxgM5fTiFYdfifJpU6qcHh7g9CJUAZf19sZxhk2MHw0prNIzUJQC9dY_-NqnmUkDzeWqknVTFzmnu-SBbCTuOrMyzBpr8_boJc_VkCiwcdkYNBNhtj937uTIF6JdauAowX4OM2q6HWF8u56JCO9Do/4y6x4bk6dqzwd40/curriculodavidias2025.pdf'}/>
                <div className="tooltip">Contact</div>
            </div>

            <div className='space-line'></div>

            <ButtonContact />
        </header>
    );
}

export default Header;
