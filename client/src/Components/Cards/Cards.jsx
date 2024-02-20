import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export const Cards = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };


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
