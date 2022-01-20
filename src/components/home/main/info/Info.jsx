import React from 'react'
import MachineL from '../../../../assets/machine.png'
import Wallet from '../../../../assets/wallet.png'
import './info.scss'
import './mediaQuery.scss'

const Info = () => {
    return (
        <div className="box__info">
            <div className="section__top">
                <div className="section__top--img">
                    <img src={MachineL} alt="Machine Learning" />
                </div>
                <div className="section__top--text">
                    <span>Tecnología</span>
                    <h2>Machine Learning</h2>
                    <p>Tenemos una red neuronal por cada criptomoneda analizando más de 20 factores globales al mismo tiempo. Logramos obtener con precisión un porcentaje de éxito en trades cortos.</p>
                </div>
            </div>
            <div className="section__bottom">
                <div className="section__bottom--text">
                    <h2>Sistema de alertas</h2>
                    <p>Luego de suscribirte tendrás acceso a las alertas vía Telegram, para no perderte de ninguna buena operación. Cada alerta llegará con información detallada, como precio actual, porcentaje de éxito, etc.</p>
                </div>
                <div className="section__bottom--img">
                    <img src={Wallet} alt="Wallet" />
                </div>
            </div>
        </div>
    )
}

export default Info
