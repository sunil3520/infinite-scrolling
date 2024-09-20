import React, { useEffect, useState } from 'react'
import Cart from './Cart';

const ProductList = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');
      const {products} = await response.json();
      console.log(products)
      setData((prev) => [...prev, ...products]);
    } catch (error) {
      console.error('Error fetching:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  }, []);

  
 
 const handleScroll = () =>{
  if(window.scrollY + window.innerHeight >=document.body.scrollHeight){
    fetchData();
  }
 }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Infinite Scroll Example</h1>
      <div className="grid grid-cols-3">
        {data.map((el) => (
          <Cart key={el.id} title={el.title} body={el.body} thumbnail={el.thumbnail}/>
        ))}
      </div>
      {loading && <p className="text-gray-500 mt-4">Loading...</p>}
    </div>
  )
}

export default ProductList



