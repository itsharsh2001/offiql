import React from "react";
import Banner from "./components/HomePage/Banner";
import Description from "./components/HomePage/Description";
import Header from "./components/HomePage/Header";
import NavBar from "./components/HomePage/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <Description />
    </>
  );
}

export default App;
