import React from 'react';
import { Card, Col, Form, Button , Row} from 'react-bootstrap';

const Filters = ({
  categories,
  ecommerceCompanies,
  selectedCategory,
  selectedCompany,
  selectedRating,
  priceRange,
  availability,
  handleCategoryChange,
  handleCompanyChange,
  handleRatingChange,
  handlePriceRangeChange,
  handleAvailabilityChange,
  applyFilters,
  clearFilters,
}) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Body>
          <h5 className="mb-3">Filters</h5>

          {/* Category filter */}
          <Form.Group controlId="categoryFilter">
            <Form.Label>Filter by Category</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* Company filter */}
          <Form.Group controlId="companyFilter">
            <Form.Label>Filter by Company</Form.Label>
            <Form.Control
              as="select"
              value={selectedCompany}
              onChange={handleCompanyChange}
            >
              <option value="">All Companies</option>
              {ecommerceCompanies.map((company) => (
                <option key={company.id} value={company.name}>
                  {company.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* Rating filter */}
          <Form.Group controlId="ratingFilter">
            <Form.Label>Filter by Rating</Form.Label>
            <Form.Control
              as="select"
              value={selectedRating}
              onChange={handleRatingChange}
            >
              <option value={0}>All Ratings</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Star{rating !== 1 ? 's' : ''}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* Price range filter */}
          <Form.Group controlId="priceRangeFilter">
            <Form.Label>Filter by Price Range</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Min Price"
                  name="min"
                  value={priceRange.min}
                  onChange={handlePriceRangeChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Max Price"
                  name="max"
                  value={priceRange.max}
                  onChange={handlePriceRangeChange}
                />
              </Col>
            </Row>
          </Form.Group>

          {/* Availability filter */}
          <Form.Group controlId="availabilityFilter">
            <Form.Check
              type="checkbox"
              label="Available Products Only"
              checked={availability}
              onChange={handleAvailabilityChange}
            />
          </Form.Group>

          {/* Buttons */}
          <div className="text-center">
            <Button variant="primary" className="mr-2" onClick={applyFilters}>
              Apply Filters
            </Button>
            <Button variant="secondary" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Filters;
