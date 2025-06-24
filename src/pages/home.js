import React from "react";
import Hero from "../Components/Hero/Hero";
import Experience from "../Components/Experience/Experience";
import RecentWork from "../Components/RecentWork/RecentWork";
import Skills from "../Components/Skills/Skills";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <Hero />
        <Experience />
        <RecentWork />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default Home;
