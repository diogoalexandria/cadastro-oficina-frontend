import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, Box, Typography, Button, Grid } from '@material-ui/core';
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
    registerPairLabelValue: {
        width: '50%'
    },    
    registerItem: {
        width: '50%',
        marginLeft: '20px',
    }
});

function RegisterPreview({ brand, model, licensePlate, mechanicName, itemList }) {
    const classes = useStyles();

    const [totalCost, setTotalCost] = useState(0);
    const [statusConfirmeButton, setStatusConfirmeButton] = useState(true);

    useEffect(() => (
        itemList.forEach(element => {
            setTotalCost(totalCost + element.custo)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [itemList])

    useEffect(() => {
        if(brand && model && licensePlate && mechanicName && itemList.length >= 1){
            setStatusConfirmeButton(false);
        }
    }, [brand, model, licensePlate, mechanicName, itemList])

    return (
        <React.Fragment>
            <Card className={classes.registerCard}>
                <Box className={classes.registerContent}>                    
                    <CardContent>
                        <Typography variant="h5">
                            Registro:
                        </Typography>
                        <Grid container direction="row">
                            {brand?
                                <Grid item className={classes.registerPairLabelValue}>                                
                                    <Typography className={classes.registerLabel}>
                                        Marca:
                                    </Typography>
                                    <Box fontStyle="italic">
                                        <Typography className={classes.registerValue}>
                                            {brand}
                                        </Typography>
                                    </Box>                                
                                </Grid>
                            :null}
                            {model?
                                <Grid item>                                
                                    <Typography className={classes.registerLabel}>
                                        Modelo:
                                    </Typography>
                                    <Box fontStyle="italic">
                                        <Typography className={classes.registerValue}>
                                            {model}
                                        </Typography>
                                    </Box>                                
                                </Grid>
                            :null}                            
                        </Grid>
                        <Grid container direction="row">
                            {licensePlate?
                                <Grid item className={classes.registerPairLabelValue}>                                
                                    <Typography className={classes.registerLabel}>
                                        Placa:
                                    </Typography>
                                    <Box fontStyle="italic">
                                        <Typography className={classes.registerValue}>
                                            {licensePlate}
                                        </Typography>
                                    </Box>                                
                                </Grid>
                            :null}
                            {mechanicName?
                                <Grid item>                                
                                    <Typography className={classes.registerLabel}>
                                        Mecânico:
                                    </Typography>
                                    <Box fontStyle="italic">
                                        <Typography className={classes.registerValue}>
                                            {mechanicName}
                                        </Typography>
                                    </Box>                                
                                </Grid>
                            :null}                                                        
                        </Grid>
                        {itemList.length >= 1?
                            <Typography className={classes.registerLabel}>
                                Iten(s):
                            </Typography>
                        :null}
                        
                        {itemList.map((item, indice)=> {                            
                            return (
                                <Grid container direction="row">
                                    <Grid item className={classes.registerItem}>
                                        <Typography>{indice + 1}. {item.nome}</Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography>R$ {item.custo.toFixed(2)}</Typography>
                                    </Grid>
                                </Grid>                                
                            );
                        })}
                    </CardContent>
                </Box>
                {totalCost > 1?
                    <Grid container direction="row">
                        <Grid item className={classes.registerPairLabelValue}>
                            <Box display="flex" justifyContent="flex-end">
                                <Typography >
                                    Custo total:
                                </Typography>
                            </Box>
                        </Grid>                        
                        <Grid item className={classes.registerPairLabelValue}>
                            <Typography className={classes.registerValue}>
                                R$ {totalCost.toFixed(2)}
                            </Typography>
                        </Grid>                      
                    </Grid>                    
                :null}
                <Box className={classes.registerButtom} display="flex" justifyContent="center" alignItems="flex-start">
                    <CardActions>
                        <Button disabled={statusConfirmeButton} variant="contained" color="primary">
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
