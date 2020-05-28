import React from 'react';
import { Card, CardContent, CardActions, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    registerCard: {
        width: '80%'        
    },
    registerLabel: {
        marginLeft: '10px',
        marginTop: '10px'
    },
    registerValue: {
        marginLeft: '20px'
    },
    registerContent: {
        height: '85%'
    },
});

function RegisterPreview({ brand, model, licensePlate, mechanicName }) {
    const classes = useStyles();   

    return (
        <React.Fragment>
            <Card className={classes.registerCard}>
                <Box className={classes.registerContent}>
                    <CardContent>
                        <Typography variant="h6">
                            Registro:
                                </Typography>
                        <Typography className={classes.registerLabel}>
                            Marca do carro:
                                </Typography>
                        <Box fontStyle="italic">
                            <Typography className={classes.registerValue}>
                                {brand}
                            </Typography>
                        </Box>
                        <Typography className={classes.registerLabel}>
                            Modelo do carro:
                                </Typography>
                        <Box fontStyle="italic">
                            <Typography className={classes.registerValue}>
                                {model}
                            </Typography>
                        </Box>
                        <Typography className={classes.registerLabel}>
                            Placa do carro:
                                </Typography>
                        <Box fontStyle="italic">
                            <Typography className={classes.registerValue}>
                                {licensePlate}
                            </Typography>
                        </Box>
                        <Typography className={classes.registerLabel}>
                            Mecânico:
                                </Typography>
                        <Box fontStyle="italic">
                            <Typography className={classes.registerValue}>
                                {mechanicName}
                            </Typography>
                        </Box>
                        <Typography className={classes.registerLabel}>
                            Iten(s):
                        </Typography>                        
                    </CardContent>
                </Box>
                <Box className={classes.registerButtom} display="flex" justifyContent="center" alignItems="flex-start">
                    <CardActions>
                        <Button variant="contained" color="primary">
                            Confirmar registro
                                </Button>
                    </CardActions>
                </Box>
            </Card>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    brand: state.formReducer.brand,
    model: state.formReducer.model,
    licensePlate: state.formReducer.licensePlate,
    mechanicName: state.formReducer.mechanicName
});

export default connect(mapStateToProps)(RegisterPreview);
