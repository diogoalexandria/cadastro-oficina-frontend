import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import RegisterPreview from './RegisterPreview';
import RegisterForm from './RegisterForm';

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
    registerPreview: {
        width: '45vw',
        marginBottom: '100px'
    },    
    registerButtom: {
        height: "15%",
    },
    addItemButton: {
        marginTop: '20px'
    },
});

export default function RegisterItens() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.title} display="flex" justifyContent="center" alignItems="Center" >
                <Typography component="h2" variant="h2" gutterBottom>
                    Registrar atendimento
                </Typography>
            </Box>
            <Box className={classes.root} display="flex" flexDirection="row" justifyContent="space-around" >
                <Box className={classes.form}>
                    <RegisterForm/>
                </Box>
                <Box className={classes.registerPreview} display="flex" justifyContent="center">
                    <RegisterPreview/>
                </Box>
            </Box>
        </React.Fragment>
    );
};