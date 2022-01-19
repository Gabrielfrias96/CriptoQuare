import React from 'react'
import './getStarted.scss'
import './mediaQuery.scss'
import phone from '../../../../assets/fone.png'

const GetStarted = () => {
    return (
        <div className="getStarted">
            <div className="box__getStarted">
                <div className="box__encabezado">
                    <h1>Empezá a sacar <br />
                    Ganancias de <br />
                    las Criptomonedas </h1>
                </div>
                <div className="box__btnGet">
                    <div className="btn__getStarted">
                        <h2>Comenzar</h2>
                    </div>
                </div>
            </div>
            <div className="img__getStarted">
                <img className="img__phone" src={phone} alt="telefono" />
            </div>
            
        </div>
    )
}

export default GetStarted
