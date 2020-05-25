import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        height: '100vh'
    }, 
    button: {
        margin: '10px'
    }
});

export default function Home() {
    const classes = useStyles();
    const history = useHistory();

    let handleRegister = () => {
        history.push("/register-item");
    };

    let handleGetItens = () => {
        history.push("/get-itens");
    };

    return (
        <React.Fragment>
            <Box className={classes.root} display="flex" flexDirection="column" justifyContent="center" alignItems="center">               
                <Box className={classes.button}>
                    <Button variant="contained" color="primary" onClick={handleRegister}>
                        Registrar
                    </Button>
                </Box>
                <Box className={classes.button}>
                    <Button variant="contained" color="primary" onClick={handleGetItens}>
                        Obter registros
                    </Button>
                </Box>                
            </Box>
        </React.Fragment>
    );
};