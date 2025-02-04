import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import logo from "./resources/Myer_Logo.svg";
import bell from "./resources/bell.svg";
import avatar from "./resources/avatar.png";
import "./App.css";
// import Articles from "./components/articles";
import Accountbalance from "./components/accountbalance";
import Transactions from "./components/transactions";
import Expenses from "./components/expenses";
import CreditCardDetails from "./components/creditcarddetails";
import Footer from "./components/footer";
import FetchContent from "./api/contentrequest";
import FAQ from "./components/faq";
import ProductList from "./components/ProductList";
import Container from "./components/container";

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const result = await FetchContent();
      setContent(result.data.dashboardByPath.item);
    };

    fetchContent();
  }, []);

  const itemId =
    "urn:aemconnection:/content/dam/securbank/en/dashboard/account-dashboard/jcr:content/data/master";

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
          <div
            className="section"
            data-aue-resource={itemId}
            data-aue-type="reference"
            data-aue-filter="cf"
          >

            <Container resource="urn:aemconnection:/content/ue-commerce/kitchen-top-fragment/jcr:content/root/section" type="container" />
            
            <div>
              <ProductList />
            </div>
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
