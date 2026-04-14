import { motion } from "motion/react";
import { CheckCircle2, Target, Heart, Users, Sprout, Wind, ShieldCheck, PackageOpen } from "lucide-react";

// Animation Variants for staggered loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Subtle Background Spices */}
      <img src="/Source/Turrmic.png" alt="" className="absolute top-[10%] left-[-5%] w-64 opacity-10 blur-[2px] -rotate-12 pointer-events-none z-0" />
      <img src="/Source/clove.png" alt="" className="absolute top-[40%] right-[-2%] w-48 opacity-10 blur-[1px] rotate-45 pointer-events-none z-0" />
      <img src="/Source/mint.png" alt="" className="absolute bottom-[20%] left-[-5%] w-72 opacity-10 blur-[2px] -rotate-45 pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 1. Hero Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/5 text-brand-red text-xs font-bold uppercase tracking-widest mb-6 border border-brand-red/10">
              <Sprout className="h-4 w-4" />
              <span>Our Origins</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brand-brown mb-8 leading-[1.1]">
              From the Heart of <br />
              <span className="text-brand-red italic text-5xl sm:text-6xl md:text-7xl">Champaran</span>
            </h1>
            <div className="space-y-6 text-brand-brown/75 text-lg leading-relaxed">
              <p className="font-medium text-brand-brown">
                Champaran Gold was born out of a simple vision: to bring the authentic, unadulterated flavors of our local fields to every kitchen in India. 
              </p>
              <p>
                We are a dedicated, community-driven business based in West Champaran, Bihar. In an era of mass-produced, chemically treated food, we stand firmly for purity. Our processing and packaging unit focuses on maintaining the highest standards of hygiene while preserving the natural oils and goodness of every ingredient.
              </p>
              <p>
                We source our raw materials locally, supporting our farmers and ensuring that only the freshest produce enters our unit. Every packet of Champaran Gold is a promise of honesty, health, and heritage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-10"
          >
            <div className="absolute inset-0 bg-brand-gold/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                alt="Champaran Fields"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Highlight Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-brand-red/10 max-w-[280px] hidden md:block group hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand-red font-serif font-bold text-2xl mb-3 flex items-center gap-2">
                <Heart className="h-6 w-6 fill-brand-red/20" /> Our Roots
              </p>
              <p className="text-brand-brown/70 text-sm italic leading-relaxed">
                "Rooted in tradition, committed to purity. We are proud to be a local brand serving the nation from Bihar."
              </p>
            </div>
          </motion.div>
        </div>

        {/* 2. The Journey of Purity (NEW SECTION) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mb-4">The Journey of Purity</h2>
            <p className="text-brand-brown/60 text-lg">How we ensure every grain and spice reaches you in its most authentic form.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {/* Connecting Line (Desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-red/10 -z-10" />

            {[
              { icon: Sprout, title: "1. Sourced Locally", desc: "Handpicked directly from trusted local farmers in West Champaran." },
              { icon: Wind, title: "2. Sun Dried & Cleaned", desc: "Naturally dried and thoroughly cleaned to remove all impurities." },
              { icon: ShieldCheck, title: "3. Cold Processed", desc: "Ground using traditional methods to retain natural oils and aroma." },
              { icon: PackageOpen, title: "4. Safely Packed", desc: "Sealed in hygienic, moisture-proof packaging to lock in freshness." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-[#FAF9F6] shadow-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300 z-10 relative">
                  <step.icon className="h-10 w-10 text-brand-red group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-brown mb-3">{step.title}</h3>
                <p className="text-brand-brown/60 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. Mission, Values, Goals Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
        >
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To provide every household with 100% pure and hygienic everyday essentials at an affordable price without compromising quality."
            },
            {
              icon: Heart,
              title: "Our Values",
              desc: "Honesty in sourcing, complete transparency in processing, and an unwavering commitment to our customers' long-term health."
            },
            {
              icon: Users,
              title: "Future Goal",
              desc: "Expanding our catalog to include premium pulses, cold-pressed oils, and organic product ranges, reaching every corner of India."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="p-10 rounded-[2.5rem] bg-white border border-brand-red/5 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-brand-red/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-beige flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 transition-transform duration-300">
                <item.icon className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-brown mb-4">{item.title}</h3>
              <p className="text-brand-brown/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. Commitment List */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-brown rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Overlay Texture */}
          <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
            <img src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1600&q=80" alt="Texture" className="w-full h-full object-cover" />
          </div>
          
          {/* Subtle Glow */}
          <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Why Trust Us</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Our Commitment to You</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Locally Sourced Premium Produce",
                "Zero Artificial Colors or Flavors",
                "Strict FSSAI Hygiene Protocols",
                "Traditional Cold-Grinding Methods",
                "Moisture-Locked Premium Packaging",
                "Directly Supporting Local Farmers"
              ].map((text, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="bg-brand-gold/20 p-2 rounded-full shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-brand-gold" />
                  </div>
                  <span className="text-lg text-white/90 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
