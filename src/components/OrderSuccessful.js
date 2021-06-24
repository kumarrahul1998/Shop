import React from 'react'
import { makeStyles,Typography } from '@material-ui/core';
import complete from "../assets/complete.gif"
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ACTION from '../Redux/action/actionTypes';
const useStyles= makeStyles({
    completeImage:{
        height:"70vh",
        width:"50vw",
        // display:"block",
        // margin: "0 auto"
    },
    orderText:{
        color:"#6d6d6d"
    }
})

const OrderSuccessful = () => {
    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch();
    dispatch({type:ACTION.EMPTY_CART})
    setTimeout(()=>{
        history.push('/')
    },2500);

    return (
            <div style={{display:"flex" ,alignItems:"center",height:"90vh",justifyContent:"center",flexDirection:"column",background:"#ffffff",zIndex:"1000"}}>
            <img className={classes.completeImage} src={complete} />
            <Typography variant="h3" className={classes.orderText}>Order Placed</Typography>
            </div> 
    )
}

export default OrderSuccessful
