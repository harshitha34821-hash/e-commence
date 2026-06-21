import { Fragment, useEffect, useState } from 'react';
import ProductCard from "../components/ProductCard";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

        fetch(apiUrl + '/products')
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.error('Failed to fetch products:', err));
    },[])


    return <Fragment>
       
   
    <h1 id="products_heading">Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products && products.map(product => <ProductCard key={product._id} product={product}/>)}
          

      </div>
    </section>
 

    </Fragment>
}
