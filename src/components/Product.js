import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Grid,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import image from '../assets/product.jpg'
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {AddItem,RemoveItem} from '../Redux/action/actionCreator';
import Divider from '@material-ui/core/Divider';
const useStyles=makeStyles({
    Card:{
      height:'40vh'  
    },
    image:{
        height:'10vh',
    },
    imageContainer:{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        height:"15vh",
    },
    price:{
        color:'gold',
    },
    descContainer:{
        padding:'0.8rem',
        // border: 'grey 1px solid'
    },
    addBtn:{
        color:"#fff",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    btnContainer:{
        display:'flex',
        justifyContent:"center",
    }
})

const Product = (props) => {
    const classes = useStyles();
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const handleIncrease=(item)=>{
        dispatch(AddItem(item,cart));
    }
    const handleDecrease=(item)=>{
        dispatch(RemoveItem(item,cart))
    }
    return (
            <>
        <Grid item xl={3} lg={4} md={6} xs={12}>
        <Card className={classes.Card} variant="outlined">
        <Grid container item lg={12} className={classes.imageContainer}>
        <img src={image} className={classes.image} alt="product"></img>
        </Grid>
        <Grid container className={classes.descContainer} variant="outlined"> 
        <Grid item lg={12} >
        <Divider></Divider>
        <Grid container item lg={12}>
            <Typography variant="h5" color="secondary" >{props.data.name}</Typography>
        </Grid>
        <Grid container item lg={12} >
            <Typography variant="h6" className={classes.price}>{props.data.price} $</Typography>
        </Grid>
        <Grid container item lg={12}>
            <Typography variant="subtitle1" color='textSecondary' >{props.data.description}</Typography>
        </Grid>
        <Grid container item lg={12} className={classes.btnContainer}>
        {cart.find(elem=>elem.name===props.data.name)?<div style={{ display: 'flex', color: '#fff' , background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',alignItems:'center'}}>
            <div onClick={() => handleDecrease(props.data)}><RemoveIcon style={{ width: '16px', marginLeft: '5px',cursor:"pointer" }}  /></div>
            <div style={{marginLeft: '10px', }} >{cart.find(i=>i.name==props.data.name).quantity}</div>
            <div onClick={() => handleIncrease(props.data)}><AddIcon style={{ width: '16px', marginLeft: '10px',cursor:"pointer" }}  /></div>
            </div> :
        <Button color="secondary" className={classes.addBtn} onClick={()=>handleIncrease(props.data)}>Add</Button>
        }
        </Grid>
        
        </Grid>
        
        </Grid>
        
        </Card>
        </Grid>
    </>)
}


export default Product;