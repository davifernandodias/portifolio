import './header-mobile.css';
import { IoMdHome } from "react-icons/io";
import { useState } from 'react'; // Corrigido: importação do useState

function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen); // Inverte o estado para animar o "X"
    };
  
    return (
      <header className='header-mobile'>
        <div className="container-header-items">
          <span><IoMdHome className='home-icon-header-mobile' /></span>
          <span onClick={handleClick}>
            {/* Corrigido: Ajuste na classe do div */}
            <div className={`three-icon-header-mobile ${isOpen ? 'open' : ''}`}>
              <div className="line line1"></div>
              <div className="line line2"></div>
            </div>
          </span>
        </div>
      </header>
    );
}
  
export default HeaderMobile;
