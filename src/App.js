import {
  BrowserRouter,
  Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Fragment } from 'react';
import Footer from './compunent/Footer';
import Header from './compunent/Header';
import Watch from './compunent/Watch';
import Filler from './compunent/Filler';
import Home from "./compunent/Home";
import Overview from "./compunent/Overview";
// import Link_DieuHuong from './compunent/Link_DieuHuong';
function App() {
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Watch" element={<Watch />} />
            <Route path="/Filler" element={<Filler />} />
            <Route path="/Overview" element={<Overview/>} />
          </Routes>
          <Footer />
        </BrowserRouter>

        {/* <Route exact path="/" component={Baner}/>
          <Route exact path="/" component={Nav}/> */}
        {/* 
          <Route path="/" component={Container}/>
          <Route path="/" component={Content}/>
          <Route path="/" component={ContentList}/>
          <Route path="/" component={ContentFooter}/>
          <Route path="/Watch" component={Watch}/>
          <Route path="/Filler" component={Filler}/> */}
        {/* <Nav />
          <Container />
          <Content />
          <ContentList />
          <ContentFooter /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );

}

export default App;
