import React from "react";
import { useCartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();
  const { title, price, image, description } = product;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 w-full max-w-xs transition hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-36 h-36 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-center h-16 overflow-hidden mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm text-center mb-2 h-12 overflow-hidden">
        {description}
      </p>
      <p className="text-blue-600 font-bold text-lg mb-4">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;