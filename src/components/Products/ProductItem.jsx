import React from 'react';
import { useEffect, useState } from 'react';

function ProductItem() {

  const [products, setProducts] = useState([]);

  // Using useEffect to fetch products on component mount
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data["_embedded"]["products"]);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render
  return (
    <div className='container mt-3'>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

           {/* Map over products and render ProductItem for each */}
      {products.length > 0 ? (
        products.map(product => (
          <tr>
            <td>{product.productName}</td>
            <td>{product.productDescription}</td>
            <td>{product.productprice}</td> {/* Make sure to match the correct property name */}
            <td><button type="button" className="btn btn-success">Update</button></td>
            <td><button type="button" className="btn btn-danger">Delete</button></td>
          </tr>
        ))
      ) : (
        <p>No products available.</p>
      )}
          
        </tbody>
      </table>
    </div>
  );
}

export default ProductItem;
