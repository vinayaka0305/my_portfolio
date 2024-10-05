import React from "react";
import MatterComponent from "./MatterComponent";
import LatestWorks from "./LatestWorks";
import LetsConnect from "./LetsConnect";
import Footer from "./Footer";
import HomeComponent from "./HomeComponent";

const Home = () => {

  return (
    <>
      <HomeComponent/>
      <MatterComponent />
      <LatestWorks />
      {/* <Client /> */}
      <LetsConnect />
      <Footer />
    </>
  );
};

export default Home;
