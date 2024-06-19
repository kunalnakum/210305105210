// src/services/api.js

const mockProducts = [
    {
      id: 1,
      name: 'Product 1',
      company: 'Company A',
      category: 'Category A',
      price: 10.99,
      rating: 4.5,
      discount: 10,
      availability: true,
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Product 2',
      company: 'Company B',
      category: 'Category B',
      price: 19.99,
      rating: 3.8,
      discount: 5,
      availability: false,
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      name: 'Product 3',
      company: 'Company C',
      category: 'Category C',
      price: 5.99,
      rating: 4.1,
      discount: 15,
      availability: true,
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      name: 'Product 4',
      company: 'Company D',
      category: 'Category B',
      price: 14.49,
      rating: 4.0,
      discount: 8,
      availability: true,
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 5,
      name: 'Product 5',
      company: 'Company A',
      category: 'Category A',
      price: 8.99,
      rating: 3.9,
      discount: 12,
      availability: false,
      image: 'https://via.placeholder.com/150', 
    },
    {
        id: 6,
        name: 'Product 6',
        company: 'Company A',
        category: 'Category A',
        price: 9.99,
        rating: 4.9,
        discount: 13,
        availability: false,
        image: 'https://via.placeholder.com/150', 
      },
    
  ];
  
  const fetchProducts = async () => {
    // Simulate asynchronous operation with setTimeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: mockProducts });
      }, 1000); // Simulate 1 second delay
    });
  };
  
  const fetchProductById = async (productId) => {
    // Simulate finding product by ID
    const product = mockProducts.find((p) => p.id === parseInt(productId));
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          resolve({ data: product });
        } else {
          reject(new Error('Product not found'));
        }
      }, 500); // Simulate 0.5 second delay
    });
  };
  
  export default { get: fetchProducts, getById: fetchProductById };
  