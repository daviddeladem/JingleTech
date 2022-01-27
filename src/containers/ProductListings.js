import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListings = () => {
    const products = useSelector((state) => state.allProducts.products);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
            console.log("Err", err);
        });
        console.log(response);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products);
  return (
    <div className="ui grid container">
        <ProductComponent />
    </div>
  );
  
};

export default ProductListings;
