import React from 'react'
import { BsTruck } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { Link} from 'react-router-dom'
import { CARTPRODUCT } from '../../redux/slices/ShoppingSlice'
import './Card.css'


export const Card = ({item})=> {

   const dispatch = useDispatch()

  //add to cart btn
  const addToCart_handler = (item) =>{
    console.log(item);

    let obj = {
      id: item.id,
      image: item.image,
      title: item.title,
      price:item.price,
    }
    dispatch(CARTPRODUCT(obj))
}

    return(
        <div className="container-card">
            <section className='card-img'>
               <img src={item.image}/>  
            </section>

            <section className='card-body'>
            
                <div className='wraper-sendIcon'>
                    <BsTruck style={{color:'red',fontSize:'1.5rem'}}/>
                    <h3>ارسال رایگان</h3>
                </div>

                <p className='desc' maxlength="30">{item.description}</p>

                <div className='wraper-count-rate'>
                   {item.rating.count<=100 ?(
                    <p>تنها {item.rating.count} عدد باقی مانده</p>
                   ): <p>ارسال فردا</p>}
                    
                    <div className='wraper-rate'>
                        <span>{item.rating.rate}</span>
                        <FaStar style={{color:'gold',marginRight:'.5rem'}}/>
                    </div>
                </div>

                <div className='wraper-btn-price'>
                    <Link className="link" to="/basket">
                       <button className='add-btn' onClick={()=>addToCart_handler(item)}>افزودن به سبد خرید</button>
                    </Link>   
                    <span>{(+item.price).toLocaleString("fa")+(' ')}تومان</span>
                </div>

            </section>

        </div>
    )
}