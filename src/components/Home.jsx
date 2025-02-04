import React from 'react'
import ImageSlider from './ImageSlider';
import Card from './Card';
import Footer from './Footer';
import ProductList from './ProductList';





const Home = () => {
    return (
        <div>
            <ImageSlider />
            <Card/>
            <ProductList/>
            <Footer/>   
        </div>
    )
}
export default Home;
