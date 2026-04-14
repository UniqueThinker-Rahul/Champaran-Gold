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
import { Info, Leaf, ShieldCheck, IndianRupee, ChevronLeft, ChevronRight } from "lucide-react";

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
        className={`w-full h-full object-cover transition-opacity duration-500 ${imageClassName} ${isLoaded ? "opacity-100" : "opacity-0"}`}
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
    // FASTER REFRESH SPEED: Changed from 5000ms to 2500ms (2.5 seconds)
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer); // Cleanup on unmount
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

// HELPER FUNCTION: GENERATES AN ARRAY OF IMAGES FOR THE SLIDER
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
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-brown mb-6"
          >
            Our <span className="text-brand-red">Products</span>
          </motion.h1>
          <p className="text-brand-brown/60 text-lg mb-12">
            Explore our carefully curated range of kitchen essentials. We bring you the finest quality products processed with care and tradition.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
            <div 
              onClick={() => setActiveFilter("All")}
              className="cursor-pointer group flex flex-col items-center text-center"
            >
              <div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 ${activeFilter === "All" ? "border-brand-red" : "border-transparent hover:border-brand-red/30"} mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300 flex items-center justify-center bg-white`}>
                <span className="text-2xl md:text-3xl font-serif text-brand-brown group-hover:scale-110 transition-transform">All</span>
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
                <div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 ${activeFilter === item.target ? "border-brand-red" : "border-transparent hover:border-brand-red/30"} mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300`}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className={`text-sm md:text-base lg:text-lg font-serif font-bold transition-colors ${activeFilter === item.target ? "text-brand-red" : "text-brand-brown group-hover:text-brand-red"}`}>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {filteredCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-brand-red/10 pb-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-brand-brown mb-2">{category.title}</h2>
                  <p className="text-brand-brown/60 max-w-md">{category.description}</p>
                </div>
                <Badge variant="outline" className="w-fit border-brand-red text-brand-red font-bold">
                  {category.products.length} Items
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {category.products.map((product, prodIdx) => (
                  <motion.div
                    key={prodIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (prodIdx % 10) * 0.1 }}
                  >
                    <Card className="rounded-[16px] overflow-hidden border border-brand-brown/10 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 group bg-white flex flex-col h-full cursor-pointer">
                      
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-beige/20">
                        <ImageWithSkeleton
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full"
                          imageClassName="group-hover:scale-105 transition-transform duration-[3000ms] ease-out"
                        />
                        <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/5 transition-colors duration-500 z-10 pointer-events-none" />
                        
                        <div className="absolute top-3 right-3 z-20 pointer-events-none">
                          <Badge className="bg-[#CFAF5B] text-brand-brown font-bold text-[10px] px-3 py-1 uppercase tracking-wider rounded-full border-none shadow-sm">
                            Available Soon
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
                        <h3 className="text-xl font-serif font-bold text-brand-brown mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                          {product.desc}
                        </p>
                        
                        <Dialog>
                          {/* FIXED: Removed asChild and inner <Button> to fix invalid nesting errors */}
                          <DialogTrigger className="flex items-center justify-center w-full rounded-full border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white transition-colors duration-300 font-medium py-3 text-base shadow-none">
                            <Info className="mr-2 h-4 w-4" /> View Details
                          </DialogTrigger>
                          
                          <DialogContent className="sm:max-w-[900px] w-[95vw] bg-white border-none rounded-[2.5rem] p-0 overflow-hidden max-h-[90vh] flex flex-col md:flex-row shadow-2xl">
                            
                            <div className="h-64 md:h-auto md:w-1/2 relative flex-shrink-0 bg-brand-beige/30">
                              <InteractiveImageSlider 
                                images={getSlideImages(product.image, prodIdx)} 
                                alt={product.name} 
                                className="w-full h-full"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-20 pointer-events-none md:hidden" />
                            </div>

                            <div className="p-8 md:p-12 relative z-10 flex flex-col md:w-1/2 overflow-y-auto bg-white">
                              <DialogHeader className="mb-8 md:mb-10 text-left border-b border-brand-brown/5 pb-6">
                                <DialogTitle className="text-3xl md:text-5xl font-serif font-bold text-brand-brown leading-tight mb-3">
                                  {product.name}
                                </DialogTitle>
                                <DialogDescription className="text-brand-red font-medium italic text-lg md:text-xl">
                                  Pure. Honest. Everyday Essentials.
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="space-y-10 flex-grow">
                                <div>
                                  <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-brown/40 mb-4 flex items-center gap-4">
                                    <span className="w-8 h-px bg-brand-brown/20 inline-block"></span>
                                    Origin Story
                                  </h4>
                                  <p className="text-brand-brown/80 leading-relaxed text-base md:text-lg font-light pl-12 border-l-2 border-brand-gold/30">
                                    {product.originStory}
                                  </p>
                                </div>
                                
                                <div className="p-6 md:p-8 rounded-[1.5rem] bg-brand-beige/40 border border-brand-brown/5">
                                  <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-brown/40 mb-4 flex items-center gap-4">
                                    <span className="w-8 h-px bg-brand-brown/20 inline-block"></span>
                                    Nutrition
                                  </h4>
                                  <p className="text-brand-brown text-base md:text-lg font-medium pl-12">
                                    {product.nutritionalFacts}
                                  </p>
                                </div>

                                <div className="grid grid-cols-3 gap-2 pt-6 mt-auto">
                                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white hover:bg-brand-beige/50 border border-transparent hover:border-brand-brown/5 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-brand-red/5 flex items-center justify-center mb-3">
                                      <Leaf className="h-5 w-5 text-brand-red" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-brown/60 text-center">100% Natural</span>
                                  </div>
                                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white hover:bg-brand-beige/50 border border-transparent hover:border-brand-brown/5 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-brand-red/5 flex items-center justify-center mb-3">
                                      <ShieldCheck className="h-5 w-5 text-brand-red" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-brown/60 text-center">Hygienic</span>
                                  </div>
                                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white hover:bg-brand-beige/50 border border-transparent hover:border-brand-brown/5 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-brand-red/5 flex items-center justify-center mb-3">
                                      <IndianRupee className="h-5 w-5 text-brand-red" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-brown/60 text-center">Best Value</span>
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