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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur animi reprehenderit officiis, minima voluptatibus excepturi tempora voluptate quam debitis numquam deleniti rem dignissimos maxime nemo. Itaque magni ex esse!</p>
                </div>
            </div>
            <div className="section__bottom">
                <div className="section__bottom--text">
                    <h2>Tendrás total control de tu Dinero</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consectetur animi reprehenderit officiis, minima voluptatibus excepturi tempora voluptate quam debitis numquam deleniti rem dignissimos maxime nemo. Itaque magni ex esse!</p>
                </div>
                <div className="section__bottom--img">
                    <img src={Wallet} alt="Wallet" />
                </div>
            </div>
        </div>
    )
}

export default Info
