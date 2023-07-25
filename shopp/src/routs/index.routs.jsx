import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Basket,Products }from '../pages'

const Routing = () => {
    
    return (
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>  
    )
  }
  
  export default Routing