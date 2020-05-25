import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField, Typography, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        height: '30vh'
    },
    root: {
        height: '70vh'
    },
    form: {
        width: '45vw'
    },
    formTextField: {
        margin: '10px'
    },
    registerPreview: {
        width: '45vw',
        marginBottom: '100px'
    },
    registerCard: {
        width: '80%'
    }
});

export default function RegisterItens() {
    const classes = useStyles();

    const [carModel, setCarModel] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carLicensePlate, setCarLicensePlate] = useState('');
    const [mechanicName, setMechanicName] = useState('');
    const [item, setItem] = useState([]);
    const [cost, setCost] = useState([]);
 

    return (
        <React.Fragment>
            <Box className={classes.title} display="flex" justifyContent="center" alignItems="Center" >
                <Typography component="h2" variant="h2" gutterBottom>
                    Registrar atendimento
                </Typography>
            </Box>
            <Box className={classes.root} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" >
                <Box className={classes.form}>
                    <form action="">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box display="flex" flexWrap="wrap">
                                <TextField
                                    className={classes.formTextField}
                                    value={carBrand}
                                    onChange={event => setCarBrand(event.target.value)}
                                    id="outlined-basic"
                                    label="Marca do carro"
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.formTextField}
                                    value={carModel}
                                    onChange={event => setCarModel(event.target.value)}
                                    id="outlined-basic"
                                    label="Modelo do carro"
                                    variant="outlined"
                                />                                
                            </Box>
                            <Box display="flex" flexWrap="wrap">
                                <TextField
                                    className={classes.formTextField}
                                    value={carLicensePlate}
                                    onChange={event => setCarLicensePlate(event.target.value)}
                                    id="outlined-basic"
                                    label="Placa do carro"
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.formTextField}
                                    value={mechanicName}
                                    onChange={event => setMechanicName(event.target.value)}
                                    id="outlined-basic"
                                    label="Mecânico"
                                    variant="outlined"
                                />
                            </Box>

                        </Box>
                    </form>
                </Box>
                <Box className={classes.registerPreview} display="flex" justifyContent="center">
                    <Card className={classes.registerCard}>
                        <CardContent>
                            <Typography variant="h6">
                                Registro:
                            </Typography>
                            <Typography>
                                Marca do carro: {carBrand}
                            </Typography>
                            <Typography>
                                Modelo do carro: {carModel}
                            </Typography>                            
                            <Typography>
                                Placa do carro: {carLicensePlate}
                            </Typography>
                            <Typography>
                                Mecânico: {mechanicName}
                            </Typography>
                        </CardContent>
                    </Card>                    
                </Box>
            </Box>
        </React.Fragment>
    );
};