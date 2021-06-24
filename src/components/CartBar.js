import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles= makeStyles((theme) => ({
    navbar:{
        display:"flex",
        justifyContent:"space-between",
        BackgroundColor:'#1976D2',
    },
    back:{
        color:'#fff'
    }
    
}))
const CartBar = (props) => {
    const {handleSearch,searchTerm,handleSort,sort} =props;
    const classes = useStyles();
    const history= useHistory();
    return (
            <Grid container>
                <Grid item xs={10}>
                        <AppBar position="fixed">
                    <Toolbar className={classes.navbar}>
                    <IconButton onClick={()=>history.push('/')}>
                    <ArrowBackIcon className={classes.back}/>
                    </IconButton>                    
                    <Typography variant="h6" className={classes.title}>
                    Cart
                    </Typography>
                    
                    </Toolbar>
                    </AppBar>
                
                </Grid>
            </Grid>
            
    )
}

export default CartBar
