import './container.css';
import Header from "../header/Header";
import ProfileDescription from '../profile-description/Profile-description';

function Container() {
    return (
        <section className="container-content">
            <Header />
            <ProfileDescription />
        </section>
    );
}

export default Container;
