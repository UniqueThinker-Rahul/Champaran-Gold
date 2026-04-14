import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-brand-beige/80 backdrop-blur-md border-b border-brand-red/10 py-1 shadow-sm"
          : "bg-transparent py-2" 
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="src\Source\Logo.png" 
            alt="Champaran Gold Logo" 
            className="h-14 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 lg:gap-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-bold transition-colors hover:text-brand-red ${
                location.pathname === link.href
                  ? "text-brand-red"
                  : "text-brand-brown/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-6 shadow-md hover:scale-105 transition-all">
            Order Now
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-brand-brown hover:bg-brand-red/10">
                  <Menu className="h-7 w-7" />
                </Button>
              }
              nativeButton={true}
            />
            {/* UPDATED MOBILE MENU CONTENT */}
            <SheetContent side="right" className="bg-[#FAF9F6] border-l border-brand-red/10 w-[85vw] sm:w-[350px] flex flex-col p-0 shadow-2xl z-[150]">
              
              {/* Mobile Menu Header with Logo */}
              <div className="p-6 border-b border-brand-brown/5 bg-white flex items-center mt-6 shadow-sm">
                <img 
                  src="src\Source\Logo.png" 
                  alt="Champaran Gold" 
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 overflow-y-auto py-4 px-6 flex flex-col bg-[#FAF9F6]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)} // Auto-close menu on click
                    className={`text-2xl font-serif font-bold py-4 border-b border-brand-brown/5 flex items-center justify-between group transition-all duration-300 ${
                      location.pathname === link.href
                        ? "text-brand-red"
                        : "text-brand-brown/80 hover:text-brand-red hover:pl-2"
                    }`}
                  >
                    {link.name}
                    <ChevronRight className={`h-5 w-5 transition-all ${
                      location.pathname === link.href 
                        ? "opacity-100 text-brand-red" 
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`} />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Footer pinned to bottom */}
              <div className="p-6 bg-white border-t border-brand-brown/5 mt-auto shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white rounded-full py-6 text-lg shadow-md font-bold transition-all hover:scale-105">
                  Order Now
                </Button>
                <p className="text-center text-[10px] text-brand-brown/40 mt-4 uppercase tracking-[0.2em] font-bold">
                  Pure. Honest. Essentials.
                </p>
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}