import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Heart, Search } from "lucide-react";
import logo from "../assets/file.svg";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Header = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();


  const handleNavigateToTshirts = () => {
    navigate('/tshirtshowcase'); 
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center px-1">
            <div className="p-3">
              <img
                src={logo}
                alt="Company Logo"
                className="h-14 w-auto" // Adjust size as needed
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Inkfiniti</h1>
              <p className="text-xs text-muted-foreground">
                Professional Printing
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" size="sm" className="font-medium">
              Customize
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="font-medium"
              onClick={handleNavigateToTshirts} // Add onClick handler
            >
              Our designs
            </Button>
            <Button variant="ghost" size="sm" className="font-medium">
              Support
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex relative"
            >
              <Heart className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs gradient-professional text-white border-0">
                0
              </Badge>
            </Button>
            {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-4 w-4" />
            </Button> */}

            {/* Conditional Rendering for User or Login/Signup */}
            {token && username ? (
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" /> {/* User icon */}
                <span className="font-medium">{username}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="font-medium"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    navigate("/login"); // Redirect to login after logout
                  }}
                >
                  <LogOut className="h-4 w-4" /> {/* Logout icon */}
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-medium"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-medium"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
