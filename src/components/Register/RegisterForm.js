import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import * as FormActions from '../../store/actions';

const useStyles = makeStyles({
    formTitle: {
        marginTop: '20px',
        marginBottom: '20px'
    },
    formTextField: {
        margin: '12px'
    },
    addItemButton: {
        marginTop: '20px'
    }
});

function RegisterForm({ 
    setBrandAction,
    setModelAction,
    setLicensePlateAction,
    setMechanicNameAction,
    setItemsListAction,
    setStatusAddConfirmationAction }) {

    const classes = useStyles();

    const [brand, setBrand] = useState('Ford');
    const [model, setModel] = useState('Ka');
    const [licensePlate, setLicensePlate] = useState('KXE5243');
    const [mechanicName, setMechanicName] = useState('Diogo');
    const [item, setItem] = useState('');
    const [cost, setCost] = useState('');
    const [itemList, setItemList] = useState([]);
    const [statusAddItemButton, setStatusAddItemButton] = useState(true);    

    useEffect(() => {
        if (item && cost)
            setStatusAddItemButton(false);
        else
            setStatusAddItemButton(true);
    }, [cost, item]);

    const handleOnChangeBrand = event => {
        setBrand(event.target.value);
        setBrandAction(event.target.value);
    }

    const handleOnChangeModel = event => {
        setModel(event.target.value);
        setModelAction(event.target.value);
    }

    const handleOnChangeLicensePlate = event => {
        setLicensePlate(event.target.value);
        setLicensePlateAction(event.target.value);
    }

    const handleOnChangeMechanicName = event => {
        setMechanicName(event.target.value);
        setMechanicNameAction(event.target.value);
    }

    const handleAddItemButton = () => {
        let numberFloat = parseFloat(cost);
        if (numberFloat > 0) {
            let newList = [...itemList, { nome: item, custo: numberFloat }]
            setItemList(newList);
            setItemsListAction(newList);
        }
        setStatusAddConfirmationAction(true);
        setItem('');
        setCost('');
        setTimeout(() => {
            setStatusAddConfirmationAction(false);
        }, 3000);
    }

    return (
        <React.Fragment>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography className={classes.formTitle}>
                    Informações do veículo:
                </Typography>
            </Box>
            <form action="">
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
                        <TextField
                            className={classes.formTextField}
                            value={brand}
                            onChange={handleOnChangeBrand}
                            id="outlined-basic"
                            label="Marca"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.formTextField}
                            value={model}
                            onChange={handleOnChangeModel}
                            id="outlined-basic"
                            label="Modelo"
                            variant="outlined"
                        />
                    </Box>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
                        <TextField
                            className={classes.formTextField}
                            value={licensePlate}
                            onChange={handleOnChangeLicensePlate}
                            id="outlined-basic"
                            label="Placa"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.formTextField}
                            value={mechanicName}
                            onChange={handleOnChangeMechanicName}
                            id="outlined-basic"
                            label="Mecânico"
                            variant="outlined"
                        />
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Typography className={classes.formTitle}>
                            Itens do registro:
                        </Typography>
                    </Box>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
                        <TextField
                            className={classes.formTextField}
                            value={item}
                            onChange={event => setItem(event.target.value)}
                            id="outlined-basic"
                            label="Item"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.formTextField}
                            value={cost}
                            onChange={event => setCost(event.target.value)}
                            id="outlined-basic"
                            label="Valor"
                            variant="outlined"
                        />
                    </Box>
                </Box>
            </form>
            <Box
                className={classes.addItemButton}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    disabled={statusAddItemButton}
                    onClick={handleAddItemButton}
                    variant="contained"
                    color="primary"
                >
                    Adicionar item
                </Button>                
            </Box>            
        </React.Fragment>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    setBrandAction: brand => dispatch(FormActions.setBrand(brand)),
    setModelAction: model => dispatch(FormActions.setModel(model)),
    setLicensePlateAction: licensePLate => dispatch(FormActions.setLicensePlate(licensePLate)),
    setMechanicNameAction: mechanicName => dispatch(FormActions.setMechanicName(mechanicName)),
    setItemsListAction: itemsList => dispatch(FormActions.setItemsList(itemsList)),
    setStatusAddConfirmationAction: statusAddConfirmation => dispatch(FormActions.setStatusAddConfirmation(statusAddConfirmation))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)