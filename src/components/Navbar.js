import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InputBase from '@material-ui/core/InputBase';
import { fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useHistory } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';

const useStyles= makeStyles((theme) => ({
    navbar:{
        display:"flex",
        justifyContent:"space-between",
        BackgroundColor:'#1976D2',
    },
    cart:{
        color: "#fff"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },

}))
const Navbar = (props) => {
    const {handleSearch,searchTerm,handleSort,sort} =props;
    const classes = useStyles();
    const cart = useSelector((state)=>state.cart);
    const history= useHistory();
    return (
            <Grid container>
                <Grid item xs={10}>
                        <AppBar position="fixed">
                    <Toolbar className={classes.navbar}>
                    <Typography variant="h6" >
                    Online Store
                    </Typography>
                    
                    <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleSearch}
                    value={searchTerm}
                    />
                    </div>
                    <div>

                    <Select
                    value={sort}
                    onChange={handleSort}
                    variant="outlined"
                    >
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='electronics'>Electronics</MenuItem>
                    <MenuItem value='groceries'>Groceries</MenuItem>
                    <MenuItem value='cosmetics'>Cosmetics</MenuItem>
                    <MenuItem value='clothes'>Clothes</MenuItem>
                    <MenuItem value='shoes'>Shoes</MenuItem>
                    </Select>
                    <IconButton onClick={()=>history.push('/cart')}>
                    <Badge badgeContent={cart.reduce((init,elem)=>init+elem.quantity,0)} color="secondary">
                    <ShoppingCartOutlinedIcon className={classes.cart}/>
                    </Badge>
                    </IconButton>                    
                    </div>

                    </Toolbar>
                    </AppBar>
                
                </Grid>
            </Grid>
            
    )
}

export default Navbar
