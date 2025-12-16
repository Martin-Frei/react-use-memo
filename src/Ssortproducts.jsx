import React, { useState, useMemo, useEffect } from "react";

export default function Ssortproducts() {
  const [products, setProducts] = useState([]);
  const [sortType, setSorttype] = useState("");

  //fetch rpoducts from API
  useEffect(() => { // useEffect to fetch products on component mount, side effect
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        //API returns products array in data.products
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } fetchProducts();
  }, []);
  

  //useMemo for sorting products / memorize sorted Products
  const sortedProducts = useMemo(() => {
    console.log("Sorting products...");
    const productsCopy = [...products];
    if (sortType === "low") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "high") {
      productsCopy.sort((a, b) => b.price - a.price);
    }
    return productsCopy;
  }, [products, sortType]); // rerender when API send new data or sortType changes


  // useEffect runs on load or when the dependencies change
  // useMemo remeber calculation result unless dependencies change

  return (
    <div className="p-10 bg-gray-200">
      <h1>Sorted Products</h1>

      <div>
        <button onClick={() => setSorttype("low") } className="border border-red-700 rounded m-5 p-3">Low to High</button>
        <button onClick={() => setSorttype("high")} className="border border-red-700 rounded m-5 p-3">High to Low</button>
      </div>

      <div className="grid grid-cols-4 gap-8">
    {sortedProducts.map((pro)=>(
        <div key={pro.id}>
            <img src={pro.thumbnail} alt={pro.title} className="w-full h-48 object-cover"/>
            <h3>{pro.title}</h3>
            <p>Euro{pro.price}</p>
        </div>
    ))}
      </div>
    </div>
  );
}
