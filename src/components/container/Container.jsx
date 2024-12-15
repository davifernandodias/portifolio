import './container.css';
import Header from "../header/Header";
import ProfileDescription from '../profile-description/Profile-description';
import HeaderMobile from '../ux/header-mobile/Header-Mobile';

function Container() {
    return (
        <>
            <HeaderMobile/> 
        <section className="container-content">
            <Header />
            <ProfileDescription />
        </section>
        </>
    );
}

export default Container;
