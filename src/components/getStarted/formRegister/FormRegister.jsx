import { Divider, Box , Paper, TextField , styled , Button} from '@mui/material'
import { yellow } from '@mui/material/colors'
import React, {useState} from 'react'
import back from '../../../assets/background_blockchain.mp4'
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
        <Box
        className="container_register"
        sx={{width:"100%", height:"65vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
           
           <Paper
            elevation={3}
            sx={{width:"350px", height:"350px"}}>
                <Divider 
                sx={{marginTop:"20px"}}
                >
                    Registro
                </Divider>
                <Box
                sx={{padding:"20px",}}>
                    <Box sx={{marginBottom:"20px"}}>
                        <TextField  label="Usuario" variant="outlined" name="username" fullWidth onChange={handleRegister}  />
                    </Box>
                    <Box sx={{marginBottom:"20px"}}>
                        <TextField  label="Correo Electronico" variant="outlined" name="username" fullWidth onChange={handleRegister}  />
                    </Box>
                    <Box>
                        <TextField label="Contraseña" type="password" variant="outlined" name="password" mt={3} fullWidth onChange={handleRegister} />
                    </Box>
                    <Box
                    sx={{marginTop:"30px"}}>
                        <ColorButton type='submit'>Registrarme</ColorButton>
                    </Box>
                </Box>
                



            </Paper>



        </Box>
    )
}

export default FormRegister
