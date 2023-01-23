import logo from './knowledgetree_logo.png';
import './Brand.css';

const HeaderPage = () => {

    return (
        <div className="Header-style">
            <img src={logo} className="Header-logo" alt="knowledgetree logo" />
            &nbsp;Knowledge tree
        </div>
    );
}

export default HeaderPage;
