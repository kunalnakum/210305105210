import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import api from '../services/api'; 

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ecommerceCompanies, setEcommerceCompanies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [availability, setAvailability] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchEcommerceCompanies();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchEcommerceCompanies = async () => {
    try {
      const response = await api.get('/ecommerce-companies');
      setEcommerceCompanies(response.data);
    } catch (error) {
      console.error('Error fetching ecommerce companies:', error);
    }
  };

  const applyFilters = () => {
    let filtered = products;

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply company filter
    if (selectedCompany) {
      filtered = filtered.filter(
        (product) => product.company === selectedCompany
      );
    }

    // Apply rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter((product) => product.rating >= selectedRating);
    }

    // Apply price range filter
    if (priceRange.min !== '' && priceRange.max !== '') {
      filtered = filtered.filter(
        (product) =>
          product.price >= parseFloat(priceRange.min) &&
          product.price <= parseFloat(priceRange.max)
      );
    }

    // Apply availability filter
    if (availability) {
      filtered = filtered.filter((product) => product.availability);
    }

    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setFilteredProducts(products);
    setSelectedCategory('');
    setSelectedCompany('');
    setSelectedRating(0);
    setPriceRange({ min: '', max: '' });
    setAvailability(false);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(parseInt(e.target.value));
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: value });
  };

  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.checked);
  };

  return (
    <Container className="py-4">
      <Row>
        <Filters
          categories={categories}
          ecommerceCompanies={ecommerceCompanies}
          selectedCategory={selectedCategory}
          selectedCompany={selectedCompany}
          selectedRating={selectedRating}
          priceRange={priceRange}
          availability={availability}
          handleCategoryChange={handleCategoryChange}
          handleCompanyChange={handleCompanyChange}
          handleRatingChange={handleRatingChange}
          handlePriceRangeChange={handlePriceRangeChange}
          handleAvailabilityChange={handleAvailabilityChange}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
        />
        <Col md={9}>
          <h1 className="mb-4">All Products</h1>
          <ProductList products={filteredProducts} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllProductsPage;
