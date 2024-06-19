const express = require('express');
const app = express();

// Sample data for products
const products = [
    { "productName": "Laptop 1", "price": 2236, "rating": 4.7, "discount": 63, "availability": "yes" },
    { "productName": "Laptop 13", "price": 1244, "rating": 4.5, "discount": 45, "availability": "out-of-stock" },
    { "productName": "Laptop 3", "price": 9102, "rating": 4.44, "discount": 98, "availability": "out-of-stock" },
    { "productName": "Laptop 11", "price": 2652, "rating": 4.12, "discount": 70, "availability": "yes" },
    { "productName": "Laptop 4", "price": 1258, "rating": 3.8, "discount": 33, "availability": "yes" },
    { "productName": "Laptop 14", "price": 9254, "rating": 3, "discount": 56, "availability": "yes" },
    { "productName": "Laptop 10", "price": 7145, "rating": 2.74, "discount": 15, "availability": "yes" }
];

app.get('/test/companies/:companyName/categories/:categoryName/products', (req, res) => {
    const { companyName, categoryName } = req.params;
    const topN = parseInt(req.query.top, 10) || 10;
    const minPrice = parseInt(req.query.minPrice, 10) || 0;
    const maxPrice = parseInt(req.query.maxPrice, 10) || 10000;

    const filteredProducts = products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );

    res.json(filteredProducts.slice(0, topN));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
