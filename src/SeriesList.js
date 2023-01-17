import React from "react";
import { BrowserRouter as Router,Route, Routes, Switch } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import PageNotFound from "./Components/PageNotFound/PageNotFound";
// import WebseriesDetails from "./Components/WebseriesDetails/WebseriesDetails";
import './App.css';

function SeriesList() {
  return (
    <div className="app">
        <h1>Welcom to new App</h1>
      {/* <Router>
        <Header/>
        <Routes>
        <Route path="/" exact element= {<Home />}></Route>
        <Route path="/webseriesdetails/:imdbID" element = {<WebseriesDetails/>}></Route>
        <Route element = {<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router> */}
    </div>
  );
}

export default SeriesList;
