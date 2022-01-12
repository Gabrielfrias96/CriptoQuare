import React from 'react'
import './header.scss'
import './mediasQuery.scss'
import Burger from './Burger';

const Header = () => {
    return (
        <header className="header">
            <h2>CryptoQuare</h2>
            <div className="box__btn">
                <div className="btn_signIn">
                    <span>Iniciar Sesion</span>
                </div>
                <div className="btn_getStarted">
                    <div className="spanGet">Comenzar</div>
                </div>
            </div>
            <div className="box__hamburger">
                <Burger/>
            </div>

        </header>
    )
}

export default Header
