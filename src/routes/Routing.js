import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />


        </Routes>
    )
}

export default Routing