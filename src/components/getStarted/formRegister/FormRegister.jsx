import { Grid, TextField , styled , Button} from '@mui/material'
import { yellow } from '@mui/material/colors'
import React, {useState} from 'react'
import './getstarted.scss'

const FormRegister = () => {


    // Valores del formulario
    const [user, setUser] = useState(
        {
            name:"",
            lastname:"",
            username:"",
            phone:"",
            email:"",
        }
    );

    // Funcion para tomar los valores de los campos
    const handleRegister = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    // Funcion para Crear el Button Custom de Material UI
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(yellow[400]),
        backgroundColor: yellow[400],
        width:"100%", 
        '&:hover': {
          backgroundColor: yellow[600],
        },
      }));


    return (
        <div className="form">
            <div className="form__text">
                <h2>Estas a unos paso de empezar en el mundo de las CriptoMonedas</h2>  
                <p>Completa el Siguente formulario y comienza a ganar Dinero.</p>
            </div>  
            <div className="form__data">
                <Grid container>
                    <Grid item  spacing={3} md={6} mt={2}>
                        <TextField style={{width:"280px"}} onChange={handleRegister} variant="outlined" label="Nombre" fullWidth name="name" />
                    </Grid>
                    <Grid item  spacing={3} md={6} mt={2}>
                        <TextField style={{width:"280px"}}  onChange={handleRegister} variant="outlined" label="Apellido" name="lastname" />
                    </Grid>
                    <Grid item  spacing={3} md={6} mt={2}>
                        <TextField style={{width:"280px"}}  onChange={handleRegister} variant="outlined" label="Nick" name="username" />
                    </Grid>
                    <Grid item  spacing={3} md={6} mt={2}>
                        <TextField style={{width:"280px"}}  onChange={handleRegister} type="number" variant="outlined" label="Telefono" name="phone" />
                    </Grid>
                    <Grid item  spacing={3} md={12} mt={2}>
                        <TextField fullWidth type="email" onChange={handleRegister} variant="outlined" label="Correo Electronico" name="email" />
                    </Grid>
                    <Grid item mt={3}>
                        <ColorButton type='submit'>Registrar</ColorButton>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default FormRegister
