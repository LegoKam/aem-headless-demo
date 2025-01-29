import React, { useEffect, useState } from 'react';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://publish-p129970-e1316086.adobeaemcloud.com/graphql/execute.json/myer/listproducts')
            .then(response => response.json())
            .then(data => setProducts(data.data.productsList.items))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product._path} className="product-tile">
                    
                    <img src='https://publish-p129970-e1316086.adobeaemcloud.com/'{product.productImage._dynamicUrl} alt={product.productTitle} />
                    <h2>{product.productTitle}</h2>
                    <p>{product.productDesc.plaintext}</p>
                </div>
            ))}
        </div>
    );
}