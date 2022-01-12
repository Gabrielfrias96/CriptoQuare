import React from 'react'
import './footer.scss'
import QR from './qr.png'

const Footer = () => {
    return (
        <div className="footer">

        <div className="footer__title">
            <h2>CriptoQuare</h2>
            <img src={QR} alt="Codigo QR" />
        </div>
        <div className="footer__map">
            <h2>Mapa</h2>
            <ul>
                <li>Comenzar</li>
                <li>Nosotros</li>
                <li>Desarrolladores</li>

            </ul>
        </div>
        <div className="footer__info">
        <h2>Plataforma</h2>
            <ul>
                <li>Teconologia</li>
                <li>Machine Learning</li>
                <li>Billetera</li>

            </ul>
        </div>
            
        </div>
    )
}

export default Footer
