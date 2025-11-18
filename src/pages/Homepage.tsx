import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./Homepage.css";
import CircularGallery from "../../src/components/ui/circulargallery";

function Homepage() {
  const [hoveredDesign, setHoveredDesign] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/getProducts"
        ); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Assuming the API returns an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Express Yourself Through Design
            </h1>
            <p className="text-xl mb-8">
              Create, customize and wear unique t-shirt designs that tell your
              story.
            </p>
            <div className="flex gap-4">
              {/* <button className="btn-primary px-8 py-3 rounded-full font-bold">
                Start Designing
              </button> */}

              <button
                onClick={() => navigate("/customise")}
                className="btn-primary px-8 py-3 rounded-full font-bold"
              >
                Start Designing
              </button>
              <button className="btn-secondary px-8 py-3 rounded-full font-bold">
                Browse Designs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Designs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our most popular designs created by talented artists
              from around the world.
            </p>
          </div>

       

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((design) => (
              <Link
                key={design._id} // Use the product ID from the API
                to={`/productDetail/${design._id}`} // Navigate to the product detail page
                className="design-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredDesign(design._id)}
                onMouseLeave={() => setHoveredDesign(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={design.imageUrl} // Use the imageUrl from the design object
                    alt={`${design.title} t-shirt design showing ${design.category} style`}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{design.title}</h3>
                      <p className="text-gray-500">{design.category}</p>
                    </div>
                    <span className="font-bold text-purple-700">
                      ${design.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have a Custom Design in Mind?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our designers can bring your vision to life on a high-quality
            t-shirt.
          </p>
          <button className="btn-accent px-8 py-3 rounded-full font-bold">
            Request Custom Design
          </button>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <img
                  src="https://placehold.co/50x50"
                  alt="High quality t-shirt material showing soft cotton texture"
                  className="w-10"
                />
              </div>
              <h3 className="font-bold text-lg mb-3">Premium Materials</h3>
              <p className="text-gray-600">
                Soft, durable fabrics that last wash after wash.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <img
                  src="https://placehold.co/50x50"
                  alt="Eco-friendly production badge with recycling symbol"
                  className="w-10"
                />
              </div>
              <h3 className="font-bold text-lg mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable production with minimal environmental impact.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <img
                  src="https://placehold.co/50x50"
                  alt="Worldwide shipping truck with package arriving at doorstep"
                  className="w-10"
                />
              </div>
              <h3 className="font-bold text-lg mb-3">Worldwide Shipping</h3>
              <p className="text-gray-600">
                Fast, reliable delivery to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
