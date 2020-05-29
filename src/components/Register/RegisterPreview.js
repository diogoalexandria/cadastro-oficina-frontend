import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    registerCard: {
        width: '80%',
        height: '100%'
    },
    registerLabel: {
        marginLeft: '10px',
        marginTop: '10px'
    },
    registerValue: {
        marginLeft: '20px'
    },
    registerContent: {
        height: '80%'
    },
    registerTotalCost: {
        height: '10%'
    },
    registerButtom: {
        height: '10%'
    }
});

function RegisterPreview({ brand, model, licensePlate, mechanicName, itemList }) {
    const classes = useStyles();

    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => (
        itemList.forEach(element => {
            setTotalCost(totalCost + element.custo)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [itemList])

    return (
        <React.Fragment>
            <Card className={classes.registerCard}>
                <Box className={classes.registerContent}>
                    <CardContent>
                        <Typography variant="h6">
                            Registro:
                        </Typography>
                        <Box display="flex" justifyContent="space-around">
                            <Box>
                                <Typography className={classes.registerLabel}>
                                    Marca do carro:
                                </Typography>
                                <Box fontStyle="italic">
                                    <Typography className={classes.registerValue}>
                                        {brand}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography className={classes.registerLabel}>
                                    Modelo do carro:
                                </Typography>
                                <Box fontStyle="italic">
                                    <Typography className={classes.registerValue}>
                                        {model}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-around">
                            <Box>
                                <Typography className={classes.registerLabel}>
                                    Placa do carro:
                                </Typography>
                                <Box fontStyle="italic">
                                    <Typography className={classes.registerValue}>
                                        {licensePlate}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography className={classes.registerLabel}>
                                    Mecânico:
                                </Typography>
                                <Box fontStyle="italic">
                                    <Typography className={classes.registerValue}>
                                        {mechanicName}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Typography className={classes.registerLabel}>
                            Iten(s):
                        </Typography>
                        {itemList.map(item => {
                            return (
                                <Box display="flex" justifyContent="space-around" alignItems="flex-start">
                                    <Typography>{item.nome}</Typography>
                                    <Typography>R$ {item.custo.toFixed(2)}</Typography>
                                </Box>
                            );
                        })}
                    </CardContent>
                </Box>
                {totalCost > 1?
                <Box className={classes.registerTotalCost} display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        <Typography className={classes.registerLabel}>
                            Custo total:
                        </Typography>
                    </Box>                    
                    <Box fontWeight={500}>
                        <Typography className={classes.registerLabel}>
                            R$ {totalCost.toFixed(2)}
                        </Typography>
                    </Box>
                </Box>
                :null}
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
    mechanicName: state.formReducer.mechanicName,
    itemList: state.formReducer.itemList
});

export default connect(mapStateToProps)(RegisterPreview);
