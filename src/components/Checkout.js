import React from 'react'
import {Grid,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';
const useStyles=makeStyles({
    bar:{
        color:'#fff',
        backgroundColor:'#1976D2',
        textAlign:'center'
    },
    mainContainer:{
        padding:"2rem",
        display:"flex",
        justifyContent:"space-between"
    },
    price:{
        color:'gold',
    },
    bottomBar:{
        color:'#fff',
        backgroundColor:'green',
        position:"fixed",
        bottom:'0',
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 2rem",
    },
    forward:{
        color:"#fff"
        
    },
    totalContainer:{
        display:"flex",
        justifyContent:"space-between",
        padding:"2rem"
    },
    divider:{
        color:"6d6d6d"
    }
})

const Checkout = () => {
    const cart = useSelector((state)=>state.cart);
    const history = useHistory();
    const classes=useStyles();
    return (
        <div>
         <Grid container>
         <Grid item lg={12} className={classes.bar}>
         <Typography variant="h3" >Order Summary</Typography>
         </Grid>

            <Grid item lg={12}>
            {cart.map((elem)=>{
                    return <div className={classes.mainContainer}>
                        <Typography variant="h4" color="secondary">{elem.name}</Typography>
                        <Typography variant="h4" className={classes.price}>{elem.price} $</Typography>
                    </div>
                })}
            <Divider className={classes.divider} />
            </Grid>
            <Grid item lg={12} className={classes.totalContainer}>
            <Typography variant="h2" color="error" >
                     Total :
            </Typography>
            <Typography variant="h2" color="error" >
                     {cart.reduce((init,elem)=>init+elem.price*elem.quantity,0)} $
            </Typography>
                
            </Grid>           
            
            <Grid item lg={12} className={classes.bottomBar}>
            <Typography variant="h6" >
                     Place Order
            </Typography>
                <IconButton onClick={()=>history.push('/order')}>
                <ArrowForwardIcon className={classes.forward}/>
                </IconButton>                    
            </Grid>           

         </Grid>           
        </div>
    )
}

export default Checkout
