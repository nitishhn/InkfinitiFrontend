
import React, { useState } from 'react';

const TShirtShowcase = ({ tshirts, onAddToCart, onOrderNow }) => {
  const sizes = ['XS', 'S', 'L', 'XL', 'XXL'];

  // Hardcoded t-shirts data (used if no tshirts prop is provided)
  const defaultTshirts = [
    { id: 1, name: 'Classic White Tee', image: 'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/25840430/2025/5/21/9fc780b2-0167-47a1-ae42-7984cfbee1201747804224431-Mad-Over-Print-Psychedelic-Printed-Cotton-Oversized-T-shirt--1.jpg', price: 19.99 },
    { id: 2, name: 'Graphic Black Tee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Cw9KNOLazlw2rX2ZabhzMhiS7csOElKuuA&s', price: 24.99 },
    { id: 3, name: 'Striped Blue Tee', image: 'https://4.imimg.com/data4/VU/TY/MY-3836831/t-shirts-printing.jpg', price: 22.99 },
    { id: 4, name: 'Vintage Red Tee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBOKhxtlNyvdNeg7qYl_z7bYwt3rFEC-eQw&s', price: 27.99 },
    { id: 5, name: 'Graphic Black Tee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Cw9KNOLazlw2rX2ZabhzMhiS7csOElKuuA&s', price: 24.99 },
    { id: 6, name: 'Striped Blue Tee', image: 'https://4.imimg.com/data4/VU/TY/MY-3836831/t-shirts-printing.jpg', price: 22.99 },
    { id: 7, name: 'Vintage Red Tee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBOKhxtlNyvdNeg7qYl_z7bYwt3rFEC-eQw&s', price: 27.99 },
    { id: 8, name: 'Classic White Tee', image: 'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/25840430/2025/5/21/9fc780b2-0167-47a1-ae42-7984cfbee1201747804224431-Mad-Over-Print-Psychedelic-Printed-Cotton-Oversized-T-shirt--1.jpg', price: 19.99 },
  ];

  // Use provided tshirts or fallback to hardcoded ones
  const tshirtData = tshirts && Array.isArray(tshirts) && tshirts.length > 0 ? tshirts : defaultTshirts;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">T-Shirt Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {tshirtData.map((tshirt) => (
          <TShirtCard
            key={tshirt.id}
            tshirt={tshirt}
            sizes={sizes}
            onAddToCart={onAddToCart}
            onOrderNow={onOrderNow}
          />
        ))}
      </div>
    </div>
  );
};

const TShirtCard = ({ tshirt, sizes, onAddToCart, onOrderNow }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleAddToCart = () => {
    onAddToCart({ ...tshirt, size: selectedSize });
  };

  const handleOrderNow = () => {
    onOrderNow({ ...tshirt, size: selectedSize });
  };

  return (
    <div className="border border-gray-300 p-4 text-center rounded-lg shadow-md bg-white">
      <img src={tshirt.image} alt={tshirt.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{tshirt.name}</h3>
      <p className="text-gray-700 font-medium">${tshirt.price}</p>
      <label htmlFor={`size-${tshirt.id}`} className="block mt-2 text-sm font-medium text-gray-600">Size:</label>
      <select
        id={`size-${tshirt.id}`}
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <div className="mt-4 flex justify-center space-x-2">
        <button 
          onClick={handleAddToCart} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleOrderNow} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default TShirtShowcase;



