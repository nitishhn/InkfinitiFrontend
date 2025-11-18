import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="gradient-professional p-3 rounded-lg">
                <span className="text-white font-bold text-xl">PT</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">ProTee</h3>
                <p className="text-sm text-muted-foreground">Professional Printing</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional custom t-shirt printing with premium quality materials. 
              Reliable service for businesses and individuals.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground">
                Customization Tool
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto">
                Templates
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto">
                Size Guide
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto">
                Bulk Orders
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto">
                Track Order
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@protee.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Design St, Creative City</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Stay informed about new features, quality updates and business offers.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button variant="professional" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ProTee Professional Printing. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;