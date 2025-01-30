import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import logo from "./resources/Myer_Logo.svg";
import bell from "./resources/bell.svg";
import avatar from "./resources/avatar.png";
import "./App.css";

import Footer from "./components/footer";
import FetchContent from "./api/contentrequest";
import ProductList from "./components/ProductList";

function App() {

  return (
    <HelmetProvider>
      <div className="App">
        <header className="App-header">
          <div className="header-alerts">
            <p>
              Free Standard Delivery applies to orders $99 and over. For orders
              under $99, a standard delivery fee of $9.95 applies no matter
              where you live in Australia.
            </p>
          </div>
          <div className="header-nav">
            <div>
              <img src={logo} className="logo" alt="logo" />
              <div>
                <ul>
                  <li>
                    <strong>Home</strong>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Beauty</a>
                  </li>
                </ul>
              </div>
              <div>
                <img src={bell} className="bell" alt="bell" />
                <img src={avatar} className="avatar" alt="avatar" />
                <div className="authFriendly">Kam Radhakrishnan</div>
              </div>
            </div>
          </div>
        </header>
        <main>

            <div>
              <ProductList />
            </div>

        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
