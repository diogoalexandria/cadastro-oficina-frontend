import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import RegisterPreview from './RegisterPreview';
import RegisterForm from './RegisterForm';
import { setStatusAddConfirmation } from '../../store/actions';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles({
    title: {
        height: '10vh',
    },
    root: {
        height: '80vh'
    },
    form: {
        marginBottom: '40px'
    },
    registerPreview: {
        marginBottom: '100px'
    },
    registerButtom: {
        height: "15%",
    },
    addItemButton: {
        marginTop: '20px'
    },
});

function RegisterItens({ statusAddConfirmation, setStatusAddConfirmationAction }) {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }    
        setStatusAddConfirmationAction(false);
      };

    return (
        <React.Fragment>
            <Box className={classes.title} display="flex" justifyContent="center" alignItems="Center" textAlign="center">
                <Typography component="h2" variant="h4" gutterBottom>
                    Registrar atendimento
                </Typography>
            </Box>

            <Box className={classes.form}>
                <RegisterForm />
            </Box>
            <Box className={classes.registerPreview} display="flex" justifyContent="center">
                <RegisterPreview />
            </Box>
            <Snackbar open={statusAddConfirmation} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Item adicionado ao registro!
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    statusAddConfirmation: state.formReducer.statusAddConfirmation
});

const mapDispatchToProps = dispatch => ({
    setStatusAddConfirmationAction: statusAddConfirmation => dispatch(setStatusAddConfirmation(statusAddConfirmation))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterItens)
