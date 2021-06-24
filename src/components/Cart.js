import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import {Grid,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {AddItem,RemoveItem} from '../Redux/action/actionCreator';
import CartBar from './CartBar'
import BottomBar from './BottomBar';
const useStyles=makeStyles({
    mainContainer:{
        display:"flex",
        justifyContent:'space-between',
        padding: "4rem 2rem"
    },
    price:{
        color:'gold',
    },
    noItemContainer:{
        display:"flex",
        justifyContent:"center",
        height: '100vh',
        alignItems:"center"
    }
})

const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleIncrease=(item)=>{
        dispatch(AddItem(item,cart));
    }
    const handleDecrease=(item)=>{
        dispatch(RemoveItem(item,cart))
    }
   
    return (
        <Grid container>
            <Grid item lg={12}>
                <CartBar></CartBar>
            </Grid>
            <Grid item lg={12}  >
                {cart.length===0&& <div className={classes.noItemContainer}><Typography variant="h3" color="secondary">No items in the Cart</Typography></div>}
                {cart.map((elem)=>{
                    return <div className={classes.mainContainer}>
                        <div>
                        <Typography variant="h5" color="primary">{elem.name}</Typography>
                        <p><Typography variant="h6">{elem.price} $</Typography></p>
                        </div>
                        <div style={{ display: 'flex', color: '#fff' , background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',alignItems:'center'}}>
                        <div onClick={() => handleDecrease(elem)}><RemoveIcon style={{ width: '16px', marginLeft: '5px',cursor:"pointer" }}  /></div>
                        <div style={{marginLeft: '10px', }} >{cart.find(i=>i.name==elem.name).quantity}</div>
                        <div onClick={() => handleIncrease(elem)}><AddIcon style={{ width: '16px', marginLeft: '10px',cursor:"pointer" }}  /></div>
                        </div>
                    </div>
                })}
            </Grid>
            <Grid item lg={12} >
            {cart.length!==0&&  <BottomBar></BottomBar>}
            </Grid>
        </Grid>
    )
}

export default Cart
