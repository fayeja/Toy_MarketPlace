import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Seller from "../Seller/Seller";
import About from "../About/About";
import Usetitle from "../../../Hooks/Usetitle";

const Home = () => {
  Usetitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Categories></Categories>
      <About></About>
      <Seller></Seller>
    </div>
  );
};

export default Home;
