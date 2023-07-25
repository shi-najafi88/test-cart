import { useSelector } from "react-redux";
import { RiDeleteBinLine } from 'react-icons/ri'
import './Basket.css'
import { Navbar } from "../../components";

export const Basket = () => {

    const state = useSelector(state => state.shopp)

    return(
        <>
        <Navbar/>
        <h2>سبد خرید</h2>
        <div className="container-cart">
           
            <table className="table">
                <thead>
                  <tr>
                    <th>تصویر</th>
                    <th>نام کالا</th>
                    <th>قیمت</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
               
                  {state.cartProductArray.map(item => (
                    <tr >
                         <td><img src={item.image} style={{width:'55px',height:'55px'}}/></td>
                         <td>{item.title}</td>
                         <td>{(+item.price).toLocaleString("fa")+(' ')}تومان</td>      
                         <td><RiDeleteBinLine  style={{fontSize:'1.2rem',color:'red',cursor:'pointer'}}/></td>       
                    </tr>  
                  ))} 
    
                </tbody>
        </table>
        </div>
        </>
    )
}