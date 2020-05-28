import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import * as FormActions from '../../store/actions';

const useStyles = makeStyles({
    formTitle: {
        marginTop: '20px',
        marginBottom: '20px'
    },
    formTextField: {
        margin: '15px'
    },
});

function RegisterForm({ modules, setBrandAction, setModelAction, setLicensePlateAction, setMechanicNameAction }) {
    const classes = useStyles();

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [mechanicName, setMechanicName] = useState('');
    const [item, setItem] = useState('');
    const [cost, setCost] = useState('');    
    const [itemList, setItemList] = useState([{nome:'teste1', custo: 35.55},{nome:'teste2', custo:65.9},{nome:'teste3', custo: 23.45}]);
    const [statusAddItemButton, setStatusAddItemButton] = useState(true);

    useEffect(() => {
        if (item && cost)
        setStatusAddItemButton(false);
        else
        setStatusAddItemButton(true);
    }, [cost, item]);
    
    const handleOnChangeBrand = event => {
        let brand = event.target.value;        
        setBrand(brand);
        setBrandAction(brand);
    }

    const handleOnChangeModel = event => {
        let model = event.target.value;
        setModel(model);
        setModelAction(model);
    }

    const handleOnChangeLicensePlate = event => {
        let licensePLate = event.target.value;
        setLicensePlate(licensePLate);
        setLicensePlateAction(licensePLate);
    }

    const handleOnChangeMechanicName = event => {
        let mechanicName = event.target.value;
        setMechanicName(mechanicName);
        setMechanicNameAction(mechanicName);
    }
    
    const handleAddItemButton = () => {
        let numberFloat = parseFloat(cost);
        if(numberFloat > 0) {
            setItemList([...statusAddItemButton, {nome: item, custo: numberFloat}]);
        }
        setItem('');
        setCost('');
    }

    return(
        <React.Fragment>
            <Box display="flex" justifyContent="center" alignItems="center">
                        <Typography className={classes.formTitle}>
                            Informações do veículo:
                        </Typography>
                    </Box>
                    <form action="">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box display="flex" flexWrap="wrap">
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
                            <Box display="flex" flexWrap="wrap">
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
                            <Box display="flex" flexWrap="wrap">
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
    setMechanicNameAction: mechanicName => dispatch(FormActions.setMechanicName(mechanicName))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)