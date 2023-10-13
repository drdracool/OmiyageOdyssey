import React from 'react';
import logo from './logo.svg';
import './App.css';

// import React, { Component, Fragment } from "react";
// import Footer from "./components/footer";

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Footer />
//       </Fragment>
//     );
//   }
// }


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}


export default App;
