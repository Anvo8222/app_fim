import {
  BrowserRouter,
  Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Fragment } from 'react';
import Baner from './compunent/Baner';
import Container from './compunent/Container';
import Content from './compunent/Content';
import ContentFooter from './compunent/ContentFooter';
import ContentList from './compunent/ContentList';
import Footer from './compunent/Footer';
import Header from './compunent/Header';
import Nav from './compunent/Nav';
import Watch from './compunent/Watch';
import Filler from './compunent/Filler';
import Home from "./compunent/Home";
// import Link_DieuHuong from './compunent/Link_DieuHuong';
function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <div className="main">
        <Header />
          <Routes>
            {/* <Route path="/" element={<Baner/>}>
              <Route path="/" element={<Nav/>}/>
              <Route path="/" element={<Container/>}/>
              <Route path="/" element={<Content/>}/>
              <Route path="/" element={<ContentList/>}/>
              <Route path="/" element={<ContentFooter/>}/>
            </Route> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/Watch" element={<Watch/>}/>
            <Route path="/Filler" element={<Filler/>}/>
          </Routes>
          <Footer />
        
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
    </BrowserRouter>
  );

}

export default App;
