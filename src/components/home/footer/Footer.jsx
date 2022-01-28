import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import QR from '../../../assets/qr-link.png'
import logo from '../../../assets/cripto_logo.png'
import clusterby from '../../../assets/cluster_logo.png'

const Footer = () => {
    return (
        <>
        <div className="footer">

            <div className="footer__title">
               <div className="">
                    <Link to="/CriptoQuare/"><img className="logo" src={logo} alt="" /></Link>
               </div>
               <div className="">
                    <img className="qr" src={QR} alt="Codigo QR" />
               </div>
            </div>
            
        </div>
        <div className="promo">
            <a href="https://clusterby.com"><img src={clusterby} alt="logo clusterby" /></a>
        </div>
    </>
    )
}

export default Footer
