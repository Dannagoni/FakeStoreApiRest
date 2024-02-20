import React from "react";
import { Cards } from "../../Components/Cards/Cards";
import { Footer } from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="p-36 mt-20">
          <h1 className="text-white text-5xl font-bold mb-3">
            ApiCommerce: Fake Store Api
          </h1>
          <p className="text-zinc-400">
            Tu Puerta de Acceso a Datos de Productos en la Nube para tu Prototipo de sitio web de comercio electrónico o compras.
          </p>
          <Link to='/documentation'>
            <button className="bg-gradient-to-br from-purple to-purple-600 text-white px-6 py-4 rounded-full shadow-lg font-bold text-lg select-none cursor-pointer mt-4">
              {"Get Start ➜"}
            </button>
          </Link>
        </div>
        <img src='/fakeapistoreimage.png' alt="imageStore" style={{ maxWidth: "700px" }} />
      </div>
      <Cards/>
      <Footer/>
    </div>
  );
};
