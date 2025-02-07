import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
// import ProductList from '../components/ProductDetails'
// import ProductDetails from '../components/ProductDetails'
const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/productdetail' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetails />} /> */}


        </Routes>
    )
}

export default Routing