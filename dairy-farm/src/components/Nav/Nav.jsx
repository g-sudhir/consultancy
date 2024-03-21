import './Nav.css';
import { Link } from 'react-router-dom'
export default function Nav(){
    return(
        <header>
        <div class="container">
            <div class="item-1">
                <img/>
                <h2>SARAVANA DAIRY FARM</h2>
            </div>
            <div class="item-2">
                <nav class="nav-bar">
                    <Link to="/home">HOME</Link>
                    <Link to="/product">PRODUCT</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/about">ABOUT</Link>
                </nav>
            </div>
        </div>
    </header>
    );
}