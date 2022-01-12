import React from 'react'
import GetStarted from './getstarted/GetStarted'
import CardCripto from './cardCripto/CardCripto'
import Info from './info/Info'
import Footer from '../footer/Footer'

const Main = () => {
    return (
        <div>
            <GetStarted/>
            <CardCripto/>
            <Info/>
            <Footer/>
        </div>
    )
}

export default Main
