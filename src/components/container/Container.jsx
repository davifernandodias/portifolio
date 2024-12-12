import './container.css'
import Header from "../header/Header";
import CheckBoxLanguage from '../ux/checkbox-language/Check-box-language';

function Container() {
    return (
        <div className="container-content">
            <Header />
            <CheckBoxLanguage/>
        </div>
    );
}

export default Container;
