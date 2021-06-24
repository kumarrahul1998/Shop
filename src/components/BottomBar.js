import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles= makeStyles((theme) => ({
    navbar:{
        display:"flex",
        justifyContent:"space-between",
        BackgroundColor:'green',
    },
    forward:{
        color:'#fff'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
      },
}))

const BottomBar = () => {
    const history = useHistory();
    const classes= useStyles();
    return (
        <div>
               <AppBar position="fixed" color="secondary" className={classes.appBar}>
                    <Toolbar variant="dense" className={classes.navbar}>
                    <Typography variant="h6" >
                     Prodceed to checkout
                    </Typography>
                    

                    <IconButton onClick={()=>history.push('/checkout')}>

                    <ArrowForwardIcon className={classes.cart}/>
                    </IconButton>                    

                    </Toolbar>
                    </AppBar>
                
        </div>
    )
}

export default BottomBar
