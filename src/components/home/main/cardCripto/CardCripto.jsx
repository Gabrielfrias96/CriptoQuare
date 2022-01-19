import React, {useState , useEffect} from 'react'
import { Paper , Box , Grid  } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import axios from 'axios'
import './cardCripto.scss'
import './mediaQuery.scss'

const CardCripto = () => {

    const [coins, setCoins] = useState([])

  useEffect(()=> {

    const addData = async () => {

        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false&price_change_percentage=24h')
        
        setCoins(data.data)
    }

    
    addData()

  
  }, [])


    return (
        <div className="boxCardCoin">
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            >
            {coins.map(coin => (
                <Grid key={coin.id} item xs={12} sm={4}
                sx={{display:"flex", justifyContent: "center"}}
                >
                <Paper 
                className="card"
                elevation={3}
                sx={{width:"250px", height:"200px"}}>
                    <div className="card__header">
                        <div className="card__img">
                            <img src={coin.image} alt={coin.name} />
                        </div>
                        <div className="card__text">
                            <div className="card__name">
                                <h4>{coin.name}</h4>
                            </div>
                            <div className="card__symbol">
                                <p>{coin.symbol}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card__body">
                        { Math.sign(coin.price_change_percentage_24h.toFixed(2)) === 1 ?
                         <span className="positive"><ArrowDropUpIcon className="arrow"/><small>%</small>{coin.price_change_percentage_24h.toFixed(2)}</span>
                        : <span className="negative">% {coin.price_change_percentage_24h.toFixed(2)}</span>}
                    </div>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Paper 
                    variant="outlined"
                    sx={{textAlign:"center", width:"80%"}}>
                        Invertir
                    </Paper>
                    </Box>

                
                    
                </Paper>
            </Grid>
            ))}  
                
                
                
            </Grid>
        </div>
    )
}

export default CardCripto
