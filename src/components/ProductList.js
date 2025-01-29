import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { time } from "echarts";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  let url = "https://publish-p129970-e1316086.adobeaemcloud.com/graphql/execute.json/myer/listproducts?" + Date.now();
  if(window.location && window.location.ancestorOrigins.length > 0) {
    url = "https://author-p129970-e1316086.adobeaemcloud.com/graphql/execute.json/myer/listproducts";
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.data.productsList.items))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => {
        const cfConnection = `urn:aemconnection:${product._path}/jcr:content/data/${product._variation}`;
        return (
          <div
            className="section"
            data-aue-resource={cfConnection}
            data-aue-type="reference"
            data-aue-filter="cf"
          >
            <div key={product._path} className="product-tile">
              <img
                data-aue-prop="productImage"
                data-aue-type="media"
                src={`https://publish-p129970-e1316086.adobeaemcloud.com${product.productImage._dynamicUrl}`}
                alt={product.productTitle}
              />
              <h2
                data-aue-prop="productTitle"
                data-aue-type="text"
              >
                {product.productTitle}
              </h2>
              <p
                data-aue-prop="productDesc"
                data-aue-type="text"
              >
                {product.productDesc.plaintext}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
