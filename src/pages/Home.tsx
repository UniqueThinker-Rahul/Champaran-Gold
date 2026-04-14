import { motion } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Leaf, IndianRupee, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden relative">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-brand-beige">
        {/* Decorative Floating Spices - INCREASED SIZE & ALWAYS VISIBLE */}
        <img src="/Source/cardmom.png" alt="" className="absolute top-[5%] md:top-[15%] left-[-10%] md:left-[2%] w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 object-contain opacity-100 rotate-[15deg] pointer-events-none drop-shadow-md z-0" />
        <img src="/Source/clove.png" alt="" className="absolute bottom-[5%] md:bottom-[15%] right-[-5%] md:right-[35%] w-24 md:w-32 lg:w-48 h-24 md:h-32 lg:h-48 object-contain opacity-100 -rotate-[30deg] pointer-events-none drop-shadow-sm z-0" />

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-red/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start bg-brand-beige/40 md:bg-transparent p-4 md:p-0 rounded-2xl backdrop-blur-sm md:backdrop-blur-none"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
                <Star className="h-3 w-3 fill-brand-red shrink-0" />
                <span>Pure. Honest. Everyday Essentials.</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-brown leading-[1.1] md:leading-[0.9] mb-6">
                Champaran <br className="hidden sm:block" />
                <span className="text-brand-red italic">Gold</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-brand-brown/70 max-w-lg mb-8 leading-relaxed">
                Experience the richness of tradition with our high-quality spices, flour, and grocery products, sourced directly from the fertile lands of West Champaran.
              </p>
              
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center lg:justify-start">
                <Link to="/products" state={{ category: "All" }} className="w-full sm:w-auto">
                  <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white rounded-full px-8 py-6 text-base sm:text-lg">
                    View Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white rounded-full px-8 py-6 text-base sm:text-lg bg-white/50">
                    Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-brand-red/10 rounded-full animate-pulse" />
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
                  alt="Spices and Grains"
                  className="w-full h-full object-cover rounded-full border-[6px] sm:border-8 border-white shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl z-20 border border-brand-red/10">
                  <p className="text-brand-red font-bold text-xl sm:text-2xl leading-none">100%</p>
                  <p className="text-brand-brown/60 text-[10px] sm:text-xs uppercase tracking-widest font-bold mt-1">Natural Purity</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Champaran Gold Offerings */}
      <section className="py-16 md:py-24 bg-white relative">
        {/* Decorative Floating Spices */}
        <img src="/Source/Cumin.png" alt="" className="absolute top-0 md:top-10 right-[-10%] md:right-[5%] w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 object-contain opacity-100 rotate-[45deg] pointer-events-none drop-shadow-sm z-0" />
        <img src="/Source/DriedGinger.png" alt="" className="absolute bottom-[-5%] left-[-15%] md:left-[2%] w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 object-contain opacity-100 -rotate-[15deg] pointer-events-none drop-shadow-md z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 bg-white/60 md:bg-transparent p-4 rounded-xl backdrop-blur-sm md:backdrop-blur-none">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mb-4">Champaran Gold Offerings</h2>
            <p className="text-brand-brown/70 text-base md:text-lg">Select your preferred option from our wide range of product categories.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 relative z-10">
            {[
              { 
                name: "Flours & Grains", 
                target: "Flour & Atta",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" 
              },
              { 
                name: "Herbs & Spices", 
                target: "Herbs, Spices & Seasonings",
                img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80" 
              },
              { 
                name: "Everyday Groceries", 
                target: "Grocery Essentials",
                img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&q=80" 
              },
              { 
                name: "Seasonings", 
                target: "Herbs, Spices & Seasonings",
                img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&q=80" 
              }
            ].map((item, idx) => (
              <Link to="/products" state={{ category: item.target }} key={idx} className="group flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-brand-beige mb-4 md:mb-6 shadow-sm group-hover:shadow-xl group-hover:border-brand-red/30 transition-all duration-300 bg-white">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-brand-brown group-hover:text-brand-red transition-colors bg-white/80 px-2 py-1 rounded-md">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Most Loved */}
      <section className="py-16 md:py-24 bg-brand-beige/50 border-y border-brand-brown/5 relative overflow-hidden">
        {/* Decorative Floating Spices */}
        <img src="/Source/chilli.png" alt="" className="absolute top-[10%] md:top-1/3 left-[-15%] md:left-[-2%] w-48 md:w-64 lg:w-[22rem] h-48 md:h-64 lg:h-[22rem] object-contain opacity-100 rotate-[120deg] pointer-events-none drop-shadow-md z-0" />
        <img src="/Source/musterd.png" alt="" className="absolute bottom-5 right-[-10%] md:right-[2%] w-32 md:w-48 lg:w-56 h-32 md:h-48 lg:h-56 object-contain opacity-100 rotate-[45deg] pointer-events-none drop-shadow-sm z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mb-4">Most loved Collections</h2>
            <p className="text-brand-brown/70 text-base md:text-lg">Discover the best categories from Champaran Gold</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
            {/* Top Collection 1 */}
            <div className="bg-white/95 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 border border-brand-red/5 text-center sm:text-left backdrop-blur-sm">
              <div className="w-full sm:w-40 md:w-48 h-48 sm:h-40 md:h-48 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Atta Range" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-2xl font-serif font-bold text-brand-brown mb-2">Essential Flours Range</h3>
                <p className="text-brand-brown/70 mb-6 text-sm md:text-base">Explore our full catalog of premium flours, combining the goodness of nature to bring you optimum nutrition for your family.</p>
                <Link to="/products" state={{ category: "Flour & Atta" }} className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white rounded-full">Explore Flours</Button>
                </Link>
              </div>
            </div>
            {/* Top Collection 2 */}
            <div className="bg-white/95 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 border border-brand-red/5 text-center sm:text-left backdrop-blur-sm">
              <div className="w-full sm:w-40 md:w-48 h-48 sm:h-40 md:h-48 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1615486171448-4fb32463e26b?w=400&q=80" alt="Spice Collection" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-2xl font-serif font-bold text-brand-brown mb-2">Authentic Spice Collection</h3>
                <p className="text-brand-brown/70 mb-6 text-sm md:text-base">Browse our extensive list of pure herbs, spices, and seasonings sourced directly from the finest local farms.</p>
                <Link to="/products" state={{ category: "Herbs, Spices & Seasonings" }} className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white rounded-full">Explore Spices</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Floating Spices */}
        <img src="/Source/Garlic.png" alt="" className="absolute top-10 left-[-10%] md:left-[5%] w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 object-contain opacity-100 -rotate-[45deg] pointer-events-none drop-shadow-sm z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 bg-white/70 p-4 rounded-2xl backdrop-blur-sm md:backdrop-blur-none md:bg-transparent">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mb-4">Why Choose Us</h2>
            <p className="text-brand-brown/60 text-base md:text-lg px-4">We believe in quality that speaks for itself. Our commitment to purity and local sourcing makes us a trusted choice for every household.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {[
              {
                icon: Leaf,
                title: "100% Pure Ingredients",
                desc: "No additives, no preservatives. Just pure goodness from nature."
              },
              {
                icon: ShieldCheck,
                title: "Hygienic Packaging",
                desc: "Processed and packed in a clean, controlled environment."
              },
              {
                icon: IndianRupee,
                title: "Affordable Price",
                desc: "Premium quality products at prices that fit every budget."
              },
              {
                icon: Star,
                title: "Local Trusted Brand",
                desc: "A brand born and raised in Champaran, serving our community."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 rounded-3xl bg-brand-beige/90 border border-brand-red/5 hover:border-brand-red/20 transition-all shadow-sm hover:shadow-xl text-center sm:text-left flex flex-col items-center sm:items-start backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-brown mb-3">{feature.title}</h3>
                <p className="text-brand-brown/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Vision */}
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mb-10 md:mb-12">Our vision</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl mx-auto text-left">
            <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer aspect-video w-full">
              <img src="https://images.unsplash.com/photo-1595856467295-d2fc0c651ad2?w=800&q=80" alt="Farm" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-red text-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 md:h-6 md:w-6 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            <div className="px-2 sm:px-4 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-brown mb-4">A sustainable way of life</h3>
              <p className="text-brand-brown/80 text-base md:text-lg leading-relaxed mb-6">
                In an attempt to work towards the betterment of the environment and bring you optimum taste and nutrition, Champaran Gold introduces its Organic range. Truly authentic spices and flours, straight from the farm to your table.
              </p>
              <Link to="/about">
                <Button variant="link" className="text-brand-red font-bold p-0 text-base md:text-lg hover:text-brand-brown">
                  Read our full story <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Community */}
      <section className="py-16 md:py-24 bg-brand-brown relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1600&q=80" alt="Spices Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">Our Community</h2>
          <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
            Join us on the journey towards better taste and nutrition. Understand your family's needs better and take the right steps towards holistic health.
          </p>
          <Button className="w-full sm:w-auto bg-brand-red hover:bg-white hover:text-brand-red text-white rounded-full px-8 py-6 text-base md:text-lg transition-colors shadow-lg">
            Join the community
          </Button>
        </div>
      </section>

      {/* 7. Quick CTA Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-brand-brown/5">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-brown/5 to-transparent z-0 pointer-events-none" />

        {/* Decorative Floating Spices Added Here */}
        <img src="/Source/Turrmic.png" alt="" className="absolute top-[5%] md:top-10 left-[-15%] md:left-[2%] w-36 md:w-56 lg:w-72 h-36 md:h-56 lg:h-72 object-contain opacity-100 -rotate-12 pointer-events-none drop-shadow-md z-0" />
        <img src="/Source/mint.png" alt="" className="absolute bottom-[5%] md:bottom-10 right-[-15%] md:right-[2%] w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 object-contain opacity-100 rotate-45 pointer-events-none drop-shadow-sm z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="bg-[#FAF9F6]/90 backdrop-blur-md border border-brand-red/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
            
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-brown mb-4 md:mb-6 relative z-10 leading-tight">
              Ready to taste the <span className="text-brand-red italic">purity?</span>
            </h2>
            <p className="text-brand-brown/70 text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto relative z-10">
              Explore our range of spices, flour, and grocery essentials. Quality you can trust, delivered with honesty.
            </p>
            
            <Link to="/products" state={{ category: "All" }} className="relative z-10 block sm:inline-block w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-brand-red text-white hover:bg-brand-red/90 rounded-full px-10 md:px-12 py-6 md:py-7 text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
