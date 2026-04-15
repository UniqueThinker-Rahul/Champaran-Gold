import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info, Leaf, ShieldCheck, IndianRupee, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

function ImageWithSkeleton({ src, alt, className, imageClassName }: { src: string; alt: string; className?: string; imageClassName?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 shimmer z-10 bg-brand-beige/50"
          />
        )}
      </AnimatePresence>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${imageClassName} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

// INTERACTIVE IMAGE SLIDER FOR PRODUCT DETAILS MODAL ONLY
function InteractiveImageSlider({ images, alt, className }: { images: string[]; alt: string; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-brand-brown shadow-md backdrop-blur-sm transition-all pointer-events-auto hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 pr-1" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-brand-brown shadow-md backdrop-blur-sm transition-all pointer-events-auto hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 pl-1" />
        </button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button 
            key={idx} 
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Herbs, Spices & Seasonings",
    description: "Our complete FSSAI-approved range of authentic, pure, and naturally processed spices.",
    products: [
      { name: "Ajowan (Bishops seed)", desc: "Aromatic seeds perfect for tempering.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Sourced locally and cleaned to perfection." },
      { name: "Aniseed (Saunf)", desc: "Sweet and aromatic digestive spice.", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Premium quality saunf for daily use." },
      { name: "Asafoetida (Hing or Hingra)", desc: "Strong, pungent flavor enhancer.", image: "https://images.unsplash.com/photo-1615485245453-9f23d580a5a8?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "Compounded Asafoetida", originStory: "Processed under strict hygienic conditions." },
      { name: "BLACK, WHITE & GREEN PEPPERS", desc: "Premium whole peppercorns.", image: "https://images.unsplash.com/photo-1508269784131-ab1bcab37b2b?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Hand-picked for the perfect sharp flavor." },
      { name: "Caraway (Siahjira)", desc: "Earthy and citrusy seeds.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Carefully sorted to ensure purity." },
      { name: "Cardamom (Elaichi)", desc: "The queen of spices, highly aromatic.", image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Sourced from the best plantations for maximum fragrance." },
      { name: "Cassia (Taj)", desc: "Warm and sweet flavoring bark.", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Processed safely to retain essential oils." },
      { name: "Celery", desc: "Dried celery for seasoning.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Dehydrated at optimum temperatures." },
      { name: "Chillies & Capsicum (Lal Mirchi)", desc: "Perfectly balanced heat and vibrant color.", image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "High Capsaicin, 100% Natural", originStory: "Sun-dried and ground to preserve fiery taste." },
      { name: "Cinnamon (Dalchini)", desc: "True cinnamon sticks and powder.", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Sourced for premium sweetness and aroma." },
      { name: "Cloves (Laung)", desc: "Rich, pungent whole cloves.", image: "https://images.unsplash.com/photo-1508269784131-ab1bcab37b2b?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Packed to retain maximum essential clove oils." },
      { name: "Coriander (Dhania)", desc: "Freshly roasted and ground.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Roasted in small batches to release essential oils." },
      { name: "Cumin (Zeera, Kalonji)", desc: "Essential everyday tempering seeds.", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Double sorted for zero impurities." },
      { name: "Curry Powder", desc: "Authentic blended spice mix.", image: "https://images.unsplash.com/photo-1615485245453-9f23d580a5a8?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "Mixed Spices", originStory: "Our signature blend of pure spices." },
      { name: "Dehydrated Onion (Sukha Pyaj)", desc: "Convenient dried onion flakes/powder.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Veg", originStory: "Moisture safely removed to ensure long shelf life." },
      { name: "Dried Ginger (Sonth)", desc: "Strong, warm dried ginger.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Ground from premium dried ginger roots." },
      { name: "Dried Laurel/Bay Leaf", desc: "Aromatic whole bay leaves.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Sun-dried to preserve their distinct flavor." },
      { name: "Dried Mango Powder (Amchur)", desc: "Tangy and fruity seasoning.", image: "https://images.unsplash.com/photo-1615485245453-9f23d580a5a8?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Made from unripe green mangoes." },
      { name: "Dried Mango Slices", desc: "Sun-dried raw mango slices.", image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural", originStory: "Traditional drying methods used for longevity." },
      { name: "Dried Mint", desc: "Refreshing dried mint leaves.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Carefully dried to maintain the cooling essence." },
      { name: "Dried Oregano", desc: "Classic culinary herb.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Premium flakes for versatile cooking." },
      { name: "Dried Rosemary", desc: "Pine-scented culinary herb.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Gently dried to preserve aroma." },
      { name: "DRIED SAGE", desc: "Earthy and slightly peppery herb.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Sourced for high culinary quality." },
      { name: "Dried Sweet Basil Leaves", desc: "Sweet, aromatic basil.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Perfectly dried for seasoning and sauces." },
      { name: "DRIED THYME", desc: "Subtle, dry aroma herb.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Herb", originStory: "Carefully processed herb." },
      { name: "Fennel (Saunf)", desc: "Premium quality fennel seeds.", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Cleaned and sorted for purity." },
      { name: "Fenugreek (Methi)", desc: "Slightly bitter, highly nutritious seeds.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Traditional spice staple." },
      { name: "Garlic (Lahsun)", desc: "Dehydrated garlic flakes and powder.", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Veg", originStory: "Strong flavor retained through careful drying." },
      { name: "Mace (Jaipatri)", desc: "Delicate, nutmeg-like spice.", image: "https://images.unsplash.com/photo-1508269784131-ab1bcab37b2b?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "The delicate outer covering of nutmeg." },
      { name: "Mixed Masala", desc: "Our versatile all-purpose blend.", image: "https://images.unsplash.com/photo-1615485245453-9f23d580a5a8?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "Mixed Spices", originStory: "A Champaran Gold special blend." },
      { name: "Mustard (Rai, Sarson)", desc: "Pungent mustard seeds.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Essential for traditional Indian tempering." },
      { name: "Nutmeg (Jaiphal)", desc: "Warm, sweet whole nutmeg.", image: "https://images.unsplash.com/photo-1508269784131-ab1bcab37b2b?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "High-quality whole spices." },
      { name: "Pimento or Allspice", desc: "Complex, multi-spice flavor profile.", image: "https://images.unsplash.com/photo-1508269784131-ab1bcab37b2b?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Sourced globally, packed locally." },
      { name: "Poppy (Khas Khas)", desc: "Nutty, texture-enhancing seeds.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Seed", originStory: "Cleaned thoroughly for culinary use." },
      { name: "Turmeric (Haldi)", desc: "Pure turmeric with high curcumin.", image: "https://images.unsplash.com/photo-1615485245453-9f23d580a5a8?auto=format&fit=crop&q=80&w=400", nutritionalFacts: "100% Natural Spice", originStory: "Sun-dried and stone-ground to preserve its medicinal properties and vibrant color." }
    ]
  },
  {
    title: "Flour & Atta",
    description: "Stone-ground quality for the perfect texture and nutrition.",
    products: [
      { 
        name: "Wheat Atta", 
        desc: "100% MP Sharbati wheat, high in fiber.", 
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
        nutritionalFacts: "Fiber: 12g, Protein: 13g, Energy: 340 kcal (per 100g)",
        originStory: "Made from premium Sharbati wheat, our atta is stone-ground to ensure the bran and germ remain intact, providing you with wholesome nutrition."
      },
      { 
        name: "Besan", 
        desc: "Fine ground Chana Dal for authentic taste.", 
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400",
        nutritionalFacts: "Protein: 22g, Fiber: 10g, Low Glycemic Index (per 100g)",
        originStory: "Our Besan is ground from high-quality Chana Dal, perfect for making crispy pakoras or smooth, delicious laddoos."
      },
      { 
        name: "Suji", 
        desc: "Premium granulated semolina for perfect snacks.", 
        image: "https://images.unsplash.com/photo-1586201327693-86750f7594df?auto=format&fit=crop&q=80&w=400",
        nutritionalFacts: "Carbohydrates: 73g, Protein: 12g, Iron: 8% (per 100g)",
        originStory: "Carefully granulated semolina that ensures the perfect texture for your upma, halwa, or any other snack you desire."
      },
    ]
  },
  {
    title: "Grocery Essentials",
    description: "Everyday essentials for a healthy and happy kitchen.",
    products: [
      { 
        name: "Sugar", 
        desc: "Refined sulfur-free crystal sugar.", 
        image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&q=80&w=400",
        nutritionalFacts: "Purity: 99.9%, Sulfur-free, Energy: 387 kcal (per 100g)",
        originStory: "Our sugar is processed using advanced sulfur-free technology, ensuring you get the purest sweetness without any harmful chemicals."
      },
      { 
        name: "Pulses (Dal, Chana)", 
        desc: "Unpolished, protein-rich pulses.", 
        image: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&q=80&w=400",
        nutritionalFacts: "Protein: 24g, Fiber: 15g, Rich in B-Vitamins (per 100g)",
        originStory: "Unpolished to retain their natural nutrients and fiber, our pulses are a staple for a balanced and healthy Indian diet."
      },
      { 
        name: "Soya Chunks", 
        desc: "High protein vegetarian chunks.", 
        image: "https://images.unsplash.com/photo-1599481238332-b280300353c1?auto=format&fit=crop&q=80&w=400",
        nutritionalFacts: "Protein: 52g, Fat: 0.5g, Iron: 20% (per 100g)",
        originStory: "A versatile vegetarian protein source, our soya chunks are processed to be soft and absorbent, perfect for curries and pulaos."
      },
    ]
  }
];

const getSlideImages = (baseImage: string, idx: number) => {
  const extraImages = [
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1615485245453-9f23d580a5a8?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1508269784131-ab1bcab37b2b?auto=format&fit=crop&q=80&w=400"
  ];
  return [
    baseImage,
    extraImages[(idx) % extraImages.length],
    extraImages[(idx + 1) % extraImages.length],
    extraImages[(idx + 2) % extraImages.length]
  ];
};

export default function Products() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(location.state?.category || "All");

  const filteredCategories = activeFilter === "All" 
    ? categories 
    : categories.filter(c => c.title === activeFilter);

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen relative overflow-hidden">
      
      {/* 4 Corner Decorative Images - Visible Only on Desktop */}
      <div className="absolute top-20 left-0 w-full h-[600px] pointer-events-none z-0 hidden lg:block">
        <div className="max-w-[1440px] mx-auto h-full relative">
          <img src="/Source/cardmom.png" alt="" className="absolute top-[5%] left-[5%] w-48 opacity-20 rotate-[15deg] mix-blend-multiply" />
          <img src="/Source/Cumin.png" alt="" className="absolute top-[65%] left-[2%] w-64 opacity-15 -rotate-[10deg] mix-blend-multiply" />
          <img src="/Source/clove.png" alt="" className="absolute top-[5%] right-[5%] w-32 opacity-20 -rotate-[30deg] mix-blend-multiply" />
          <img src="/Source/DriedGinger.png" alt="" className="absolute top-[65%] right-[2%] w-48 opacity-20 rotate-[25deg] mix-blend-multiply" />
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-brown mb-6"
          >
            Our <span className="text-brand-red italic">Products</span>
          </motion.h1>
          <p className="text-brand-brown/60 text-lg mb-12">
            Explore our carefully curated range of kitchen essentials. We bring you the finest quality products processed with care and tradition.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
            <div 
              onClick={() => setActiveFilter("All")}
              className="cursor-pointer group flex flex-col items-center text-center"
            >
              <div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[6px] ${activeFilter === "All" ? "border-brand-red/20 shadow-lg p-1" : "border-white shadow-sm hover:border-brand-red/10 hover:shadow-md p-0"} mb-4 transition-all duration-300 flex items-center justify-center bg-white`}>
                <span className="text-2xl md:text-3xl font-serif text-brand-brown font-bold group-hover:scale-110 transition-transform">All</span>
              </div>
              <h3 className={`text-sm md:text-base lg:text-lg font-serif font-bold transition-colors ${activeFilter === "All" ? "text-brand-red" : "text-brand-brown group-hover:text-brand-red"}`}>All Products</h3>
            </div>

            {[
              { 
                name: "Herbs & Spices", 
                target: "Herbs, Spices & Seasonings",
                img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80"
              },
              { 
                name: "Flours & Atta", 
                target: "Flour & Atta",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80"
              },
              { 
                name: "Grocery Essentials", 
                target: "Grocery Essentials",
                img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&q=80"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveFilter(item.target)}
                className="cursor-pointer group flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[6px] ${activeFilter === item.target ? "border-brand-red/20 shadow-lg p-1" : "border-white shadow-sm hover:border-brand-red/10 hover:shadow-md p-0"} mb-4 transition-all duration-300 bg-white`}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className={`text-sm md:text-base lg:text-lg font-serif font-bold transition-colors ${activeFilter === item.target ? "text-brand-red" : "text-brand-brown group-hover:text-brand-red"}`}>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {filteredCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-brand-brown/5 pb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-3">{category.title}</h2>
                  <p className="text-brand-brown/60 max-w-xl text-lg">{category.description}</p>
                </div>
                <Badge className="w-fit bg-brand-red/10 hover:bg-brand-red/20 text-brand-red font-bold text-sm px-4 py-1.5 rounded-full border-none shadow-none">
                  {category.products.length} Products
                </Badge>
              </div>

              {/* GRID CONTAINER: Changed to show exactly 2 columns on small screens */}
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
                {category.products.map((product, prodIdx) => (
                  <motion.div
                    key={prodIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (prodIdx % 10) * 0.1 }}
                    className="h-full"
                  >
                    <Card className="rounded-[1rem] sm:rounded-[2rem] overflow-hidden border-none shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group bg-white flex flex-col h-full cursor-pointer relative">
                      
                      <div className="absolute top-2 sm:top-4 right-0 z-20 pointer-events-none overflow-hidden">
                        <div className="bg-brand-gold text-brand-brown font-bold text-[8px] sm:text-[10px] px-2 sm:px-4 py-1 sm:py-1.5 uppercase tracking-wider rounded-l-full shadow-md transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                          Available Soon
                        </div>
                      </div>

                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF9F6]">
                        <ImageWithSkeleton
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full"
                          imageClassName="group-hover:scale-105 transition-transform duration-[2000ms] ease-out object-cover mix-blend-multiply"
                        />
                      </div>

                      {/* Scaled padding for mobile view to prevent cramming */}
                      <CardContent className="p-3 sm:p-6 md:p-8 flex flex-col flex-grow text-center items-center">
                        <h3 className="text-sm sm:text-lg md:text-xl font-serif font-bold text-brand-brown mb-1 sm:mb-3 group-hover:text-brand-red transition-colors duration-300 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-brand-brown/50 text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed mb-3 sm:mb-6 flex-grow line-clamp-2">
                          {product.desc}
                        </p>
                        
                        <Dialog>
                          <DialogTrigger className="flex items-center justify-center w-full rounded-full bg-brand-beige hover:bg-brand-red text-brand-brown hover:text-white transition-all duration-300 font-bold py-2 sm:py-3.5 text-[10px] sm:text-sm shadow-sm group-hover:shadow-md">
                            View Details <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 opacity-0 -translate-x-1 sm:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </DialogTrigger>
                          
                          <DialogContent className="sm:max-w-[900px] w-[95vw] bg-white border-none rounded-[1.5rem] sm:rounded-[2.5rem] p-0 overflow-hidden max-h-[90vh] flex flex-col md:flex-row shadow-2xl">
                            
                            <div className="h-64 md:h-auto md:w-1/2 relative flex-shrink-0 bg-[#FAF9F6]">
                              <InteractiveImageSlider 
                                images={getSlideImages(product.image, prodIdx)} 
                                alt={product.name} 
                                className="w-full h-full mix-blend-multiply"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-20 pointer-events-none md:hidden" />
                            </div>

                            <div className="p-6 sm:p-8 md:p-12 relative z-10 flex flex-col md:w-1/2 overflow-y-auto bg-white">
                              <DialogHeader className="mb-6 sm:mb-8 md:mb-10 text-left border-b border-brand-brown/5 pb-4 sm:pb-6">
                                <DialogTitle className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-brown leading-tight mb-2 sm:mb-3">
                                  {product.name}
                                </DialogTitle>
                                <DialogDescription className="text-brand-red font-medium italic text-xs sm:text-lg">
                                  Pure. Honest. Everyday Essentials.
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="space-y-6 sm:space-y-8 flex-grow">
                                <div>
                                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-brown/40 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-4">
                                    <span className="w-6 sm:w-8 h-px bg-brand-brown/20 inline-block"></span>
                                    Origin Story
                                  </h4>
                                  <p className="text-brand-brown/80 leading-relaxed text-sm sm:text-base font-light pl-4 sm:pl-6 border-l-2 border-brand-gold/30">
                                    {product.originStory}
                                  </p>
                                </div>
                                
                                <div className="p-4 sm:p-6 rounded-[1.5rem] bg-[#FAF9F6] border border-brand-brown/5">
                                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-brown/40 mb-2 sm:mb-3 flex items-center gap-2 sm:gap-4">
                                    <span className="w-6 sm:w-8 h-px bg-brand-brown/20 inline-block"></span>
                                    Nutrition & Purity
                                  </h4>
                                  <p className="text-brand-brown font-medium text-sm sm:text-base">
                                    {product.nutritionalFacts}
                                  </p>
                                </div>

                                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 sm:pt-4 mt-auto">
                                  <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#FAF9F6] border border-transparent transition-all">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 sm:mb-3 text-brand-red">
                                      <Leaf className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-brown/60 text-center">100% Natural</span>
                                  </div>
                                  <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#FAF9F6] border border-transparent transition-all">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 sm:mb-3 text-brand-red">
                                      <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-brown/60 text-center">Hygienic</span>
                                  </div>
                                  <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#FAF9F6] border border-transparent transition-all">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 sm:mb-3 text-brand-red">
                                      <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-brand-brown/60 text-center">Best Value</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
