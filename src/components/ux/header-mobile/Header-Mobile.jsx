import './header-mobile.css';
import { IoMdHome } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { useState, useEffect } from 'react';

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('focus-in-contract-bck');
    } else {
      setAnimationClass('');
    }
  }, [isOpen]);

  return (
    <header className='header-mobile'>
      <div className="container-header-items">
        <span><IoMdHome className='home-icon-header-mobile' /></span>
        <span onClick={handleClick}>
          <div className={`three-icon-header-mobile ${isOpen ? 'open' : ''}`}>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        </span>
      </div>
      {/* Menu expandido com links para redes sociais */}
      <div className={`menu-links ${isOpen ? 'open' : ''}`}>
        <a href="https://www.linkedin.com/in/davifernandodias/" target="_blank" rel="noopener noreferrer" className="menu-link">
          <FaLinkedin className="menu-icon" /> <span className={animationClass}>Linkedin</span>
        </a>
        <a href="https://github.com/davifernandodias/" target="_blank" rel="noopener noreferrer" className="menu-link">
          <FaGithub className="menu-icon" /> <span className={animationClass}>Github</span>
        </a>
        <a href="https://download937.mediafire.com/2iabgnehno3gaLgGgdSe5ZAr2cgxgM5fTiFYdfifJpU6qcHh7g9CJUAZf19sZxhk2MHw0prNIzUJQC9dY_-NqnmUkDzeWqknVTFzmnu-SBbCTuOrMyzBpr8_boJc_VkCiwcdkYNBNhtj937uTIF6JdauAowX4OM2q6HWF8u56JCO9Do/4y6x4bk6dqzwd40/curriculodavidias2025.pdf" target="_blank" rel="noopener noreferrer" className="menu-link">
          <MdContactPage className="menu-icon" /> <span className={animationClass}>Currículo</span>
        </a>
      </div>
    </header>
  );
}

export default HeaderMobile;
