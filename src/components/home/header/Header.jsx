import React from 'react'
import './header.scss'
import './mediasQuery.scss'
import logo from '../../../assets/cripto_logo_header.png'
import Burger from './Burger';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/CriptoQuare/" style={{textDecoration:"none"}}>
                <img src={logo} alt="logo Criptoquare" />
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
