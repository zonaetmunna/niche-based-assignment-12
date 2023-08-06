import React from "react";
import Banner from "../../components/page/home/Banner/Banner";
import Discount from "../../components/page/home/Discount/Discount";
import Products from "../../components/page/home/Products/Products";
import Review from "../../components/page/home/Review/Review";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <Review />
      <Discount />
    </>
  );
};

export default Home;
