import { Box , Paper , Divider, TextField , Button} from '@mui/material'
import { styled } from '@mui/material';
import { yellow } from '@mui/material/colors';
import React, { useState } from 'react';






const FormLogin = () => {


    //Estado de los value de los campos
    const [login, setLogin] = useState(
        {   
            username:"",
            email:"",
            password:""
        }
        );
    
    // Funncion para tomar los campos de los formularios.
        const handleLogin = (e) => {
            setLogin(
                {
                    ...login,
                    [e.target.name]: e.target.value
                }
            )
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
        sx={{backgroundImage:"url: ./trading.jpeg" , width:"100%", height:"65vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Paper
            elevation={3}
            sx={{width:"350px", height:"350px"}}>
                <Divider 
                sx={{marginTop:"20px"}}
                >
                    Iniciar Sesion
                </Divider>
                <Box
                sx={{padding:"20px",}}>
                    <Box sx={{marginBottom:"20px"}}>
                        <TextField  label="Usuario" variant="outlined" name="username" fullWidth onChange={handleLogin}  />
                    </Box>
                    <Box sx={{marginBottom:"20px"}}>
                        <TextField  label="Correo Electronico" variant="outlined" name="email" fullWidth onChange={handleLogin}  />
                    </Box>
                    <Box>
                        <TextField label="Contraseña" type="password" variant="outlined" name="password" mt={3} fullWidth onChange={handleLogin} />
                    </Box>
                    <Box
                    sx={{marginTop:"30px"}}>
                        <ColorButton type='submit'> Iniciar</ColorButton>
                    </Box>
                </Box>
                



            </Paper>



        </Box>
    )
}

export default FormLogin
