import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export const Cards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center bg-blue950 text-white">
      <div className="flex overflow-x-auto scrollbar-hide">
        {products.map((product) => (
          <div className="flex-shrink-0" key={product._id}>
            <Card
              name={product.name}
              category={product.category.name}
              price={product.price}
              image={product.image}
            />
          </div>
          
        ))}
      </div>
    </div>
  );
};
