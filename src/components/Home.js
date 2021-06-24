import React,{useState} from 'react'
import {data} from './data'
import Product from './Product'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

const useStyles=makeStyles({
    mainContainer:{
        padding:"12vh 0 0 0 "
    }
})
const Home = () => {
    const classes = useStyles();
    const [searchTerm,setSearchTerm] = useState('');
    const [sort,setSort] = useState('all');

    const handleSearch=(e)=>{
      setSearchTerm(e.target.value);
    }
    const handleSort=(e)=>{
        setSort(e.target.value);
    }
    return (<>
         <Navbar searchTerm={searchTerm} handleSearch={handleSearch} sort={sort} handleSort={handleSort}></Navbar>

        <Grid container >
            <Grid item lg={12}>
                <Grid container spacing={2} className={classes.mainContainer}>
                {data.filter(elem=>{
                    if(searchTerm=='')return elem
                    else if(elem.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return elem
                }).filter((elem)=>{
                    if(sort=='all') return elem
                    else if(elem.category===sort)return elem}).map(item=> <Product data={item}></Product>)}
                </Grid>
            </Grid>
        </Grid>
    </>)
}

export default Home
