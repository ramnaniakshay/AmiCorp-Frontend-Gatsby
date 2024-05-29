import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../Assets/CSS/ProductDetail.css"

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/products?filters[slug][$eq]=${params.slug}&populate=*`);
        if (response.data.data.length > 0) {
          setProduct(response.data.data[0]);
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.attributes.p_name}</h1>
      <p>Quantity: {product.attributes.p_qty}</p>
      <p>Price: {product.attributes.p_price}</p>
      <p>Description: {product.attributes.p_desc}</p>
      {product.attributes.p_img.data && (
        <img
          src={`http://localhost:1337${product.attributes.p_img.data.attributes.url}`}
          alt={product.attributes.p_name}
          width="300"
        />
      )}
    </div>
  );
};

export default ProductDetail;
