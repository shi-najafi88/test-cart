import { useEffect } from 'react';
import { Card, Navbar } from '../../components/index'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PRODUCT_INFO } from "../../redux/slices/ShoppingSlice"
import './Products.css'

export const Products = () => {

    const state = useSelector(state => state.shopp)
    const dispatch = useDispatch()

    //get product data
    const getData = ()=> {
        axios.get('https://fakestoreapi.com/products')
        .then(res => dispatch(PRODUCT_INFO(res.data)))
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
         <Navbar/>
         <div className="product-container">
            {state. productsInfoArray.map(item =>(
                <Card item={item}/>
            ))} 
         </div>
        </>   
    )
}