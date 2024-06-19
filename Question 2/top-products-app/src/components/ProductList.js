import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const ProductList = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} md={4} sm={6} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${product.price.toFixed(2)}
                <br />
                <strong>Rating:</strong> {product.rating} / 5
                <br />
                {product.availability ? (
                  <span className="text-success">Available</span>
                ) : (
                  <span className="text-danger">Out of Stock</span>
                )}
              </Card.Text>
              <Button variant="primary" href={`/products/${product.id}`}>
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
