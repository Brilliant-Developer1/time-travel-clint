import React from 'react';
import Header from '../Header/Header';
import HomeWatches from '../HomeWatches/HomeWatches/HomeWatches';
import OurBrands from '../OurBrands/OurBrands';
import ReviewsData from '../Reviews/ReviewsData';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeWatches></HomeWatches>
            <OurBrands></OurBrands>
            <ReviewsData></ReviewsData>
        </div>
    );
};

export default Home;