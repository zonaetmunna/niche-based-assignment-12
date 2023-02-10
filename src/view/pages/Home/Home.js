import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import Banner from '../../components/page/home/Banner/Banner';
import Discount from '../../components/page/home/Discount/Discount';
import Products from '../../components/page/home/Products/Products';
import Review from '../../components/page/home/Review/Review';


const Home = () => {
     return (
          <>
               <Header />
               <Banner />
               <Products />
               <Review />
               <Discount />
               <Footer />

          </>
     );
};

export default Home;