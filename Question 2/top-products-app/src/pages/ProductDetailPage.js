
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import api from '../services/api';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} className="product-image" />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="product-details">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="mb-2 text-muted">
                By {product.company}
              </Card.Text>
              <Card.Text className="mb-2">{product.category}</Card.Text>
              <Card.Text className="mb-2">
                <strong>Price:</strong> {product.price ? `$${product.price.toFixed(2)}` : 'Price not available'}
              </Card.Text>
              <Card.Text className="mb-2">
                <strong>Rating:</strong> {product.rating || 'Rating not available'}
              </Card.Text>
              <Card.Text className="mb-2">
                <strong>Discount:</strong> {product.discount}% off
              </Card.Text>
              <Card.Text className="mb-2">
                <strong>Availability:</strong>{' '}
                {product.availability ? 'In Stock' : 'Out of Stock'}
              </Card.Text>
              <Button variant="warning" className="mr-2">Add to Cart</Button>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
