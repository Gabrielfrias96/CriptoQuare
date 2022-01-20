import React from 'react'
import {Link} from 'react-router-dom'
import './getStarted.scss'
import './mediaQuery.scss'
import phone from '../../../../assets/fone.png'

const GetStarted = () => {
    return (
        <div className="getStarted">
            <div className="box__getStarted">
                <div className="box__encabezado">
                    <h1>Redes Neuronales prediciendo el Mercado.</h1>
                </div>
                <div className="box__btnGet">
                    <div className="btn__getStarted">
                        <Link to="/CriptoQuare/register" style={{textDecoration:"none", color:"white"}}>
                            <h2>Comenzar</h2>
                        </Link>
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
