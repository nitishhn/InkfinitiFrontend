import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import ArrowLeftIcon from '../assets/left_arrow_icon.png';
import shoppingCart from '../assets/cart_shopping_icon.png'


// shirt-design-lab\src\assets\left_arrow_icon.png


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/getProductById/${id}`
        );
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.title} (Size: ${selectedSize}) to cart`);
  };

  // Handle loading and error states
  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
      onClick={() => navigate(-1)}
      className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
    >
      <img src={ArrowLeftIcon} alt="Back" className="h-5 w-5 mr-2" />
      Back to Products
    </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>
          <p className="text-gray-500 mb-4">{product.category}</p>

          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border rounded-md 
                    ${
                      selectedSize === size
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border border-gray-300 rounded-l-md"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border border-gray-300 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-2 px-3 rounded-md hover:bg-indigo-700 flex items-center justify-center"
          >
            <img src={shoppingCart} alt="Back" className="h-6 w-6 mr-2" />
            Add to Cart
          </button>

          {/* Product Description */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600">
              {product.description ||
                "Premium quality t-shirt with unique design. Made from 100% cotton for maximum comfort."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
