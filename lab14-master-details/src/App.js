import './App.css';
import { Fragment, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductProvider from './ProductProvider';
import ProductListing from './ProductListing';
import ProductDetailsPage from './ProductDetailsPage';

function App() {
  return (
    <Fragment>
      <ProductProvider>
        <Router>

          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
          </Routes>

        </Router>

      </ProductProvider>
    </Fragment>
  );
}

export default App;
