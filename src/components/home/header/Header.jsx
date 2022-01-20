import React from 'react'
import './header.scss'
import './mediasQuery.scss'
import Burger from './Burger';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/CriptoQuare/" style={{textDecoration:"none"}}>
                <h2>CryptoQuare</h2>
            </Link>
            <div className="box__btn">
                <div className="btn_signIn">
                    <Link to="/CriptoQuare/login"> 
                        <span>Iniciar Sesión</span>
                    </Link>
                </div>
                <div className="btn_getStarted">
                    <Link to="/CriptoQuare/register" style={{textDecoration:"none"}}>
                        <div className="spanGet">Comenzar</div>
                    </Link> 
                </div>
            </div>
            <div className="box__hamburger">
                <Burger/>
            </div>

        </header>
    )
}

export default Header
