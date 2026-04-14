import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // <--- THIS WAS THE MISSING LINE!

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-beige border-t-8 border-brand-red relative overflow-hidden">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        
        {/* PREMIUM NEWSLETTER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 mb-16 shadow-lg backdrop-blur-sm">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-brand-gold">Champaran Gold</span> in Your Inbox
            </h3>
            <p className="text-brand-beige/70 text-sm md:text-base">
              Subscribe to get exclusive offers, recipes, and updates from our community.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 max-w-lg">
            <input 
              type="email" 
              placeholder="Enter your Email ID" 
              className="bg-white/10 border border-white/20 rounded-full px-6 py-4 w-full text-white placeholder:text-white/50 focus:outline-none focus:border-brand-gold transition-colors" 
            />
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-8 py-6 text-base font-bold shadow-md transition-all hover:scale-105 shrink-0">
              Subscribe Now
            </Button>
          </div>
        </div>

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & FSSAI Column */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                Champaran <span className="text-brand-gold italic">Gold</span>
              </span>
            </Link>
            <p className="text-brand-beige/70 text-sm leading-relaxed mb-8 max-w-sm">
              Pure. Honest. Everyday Essentials. Bringing the authentic taste and purity of West Champaran directly to your kitchen.
            </p>

            {/* FSSAI TRUST BADGE */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xl w-fit">
              <img 
                src="src\Source\Fssai.png" 
                alt="FSSAI" 
                className="h-10 md:h-12 object-contain" 
              />
              <div className="border-l-2 pl-4 border-gray-100 text-left">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Lic. No.</p>
                <p className="text-brand-brown font-bold text-sm tracking-wide">20426083000010</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-serif font-bold text-xl text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-brand-gold rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-brand-beige/70">
              {['Home', 'About Us', 'Our Products', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-gold transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-serif font-bold text-xl text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-brand-gold rounded-full"></span> Products
            </h4>
            <ul className="space-y-4 text-sm text-brand-beige/70">
              {['Herbs & Spices', 'Flour & Atta', 'Grocery Essentials', 'New Arrivals'].map((item, idx) => (
                <li key={idx}>
                  <Link to="/products" className="hover:text-brand-gold transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-serif font-bold text-xl text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-brand-gold rounded-full"></span> Contact Info
            </h4>
            <ul className="space-y-5 text-sm text-brand-beige/70">
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-brand-gold/20 transition-colors">
                  <MapPin className="h-5 w-5 text-brand-gold" />
                </div>
                <span className="pt-1 leading-relaxed">Village: [Your Village Name], West Champaran, Bihar - [Your Pincode]</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-brand-gold/20 transition-colors">
                  <Phone className="h-5 w-5 text-brand-gold" />
                </div>
                <span className="group-hover:text-brand-gold transition-colors">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-brand-gold/20 transition-colors">
                  <Mail className="h-5 w-5 text-brand-gold" />
                </div>
                <span className="group-hover:text-brand-gold transition-colors">champarangold@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & SOCIALS */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-beige/50">
          <p className="text-center md:text-left text-[13px]">
            © {new Date().getFullYear()} <span className="text-white font-medium">Champaran Gold Food Products</span>. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-brand-gold hover:text-brand-brown text-white transition-all duration-300 hover:scale-110">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-brand-gold hover:text-brand-brown text-white transition-all duration-300 hover:scale-110">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-brand-gold hover:text-brand-brown text-white transition-all duration-300 hover:scale-110">
              <Twitter className="h-4 w-4" />
            </a>
          </div>

          <p className="font-medium tracking-widest uppercase text-[11px] text-brand-gold">
            Made in Bihar, India
          </p>
        </div>
      </div>
    </footer>
  );
}