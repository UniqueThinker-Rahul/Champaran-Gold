import { motion } from "motion/react";
import { CheckCircle2, Target, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-brown mb-8">
              From the Heart of <br />
              <span className="text-brand-red italic text-5xl md:text-7xl">Champaran</span>
            </h1>
            <div className="space-y-6 text-brand-brown/70 text-lg leading-relaxed">
              <p>
                Champaran Gold was born out of a simple vision: to bring the authentic, unadulterated flavors of our local fields to every kitchen in India. We are a small, dedicated business based in West Champaran, Bihar.
              </p>
              <p>
                In an era of mass-produced, chemically treated food, we stand for purity. Our processing and packaging unit focuses on maintaining the highest standards of hygiene while preserving the natural goodness of the ingredients.
              </p>
              <p>
                We source our raw materials locally, supporting our farmers and ensuring that only the freshest produce enters our unit. Every packet of Champaran Gold is a promise of honesty and health.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                alt="Champaran Fields"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-beige p-8 rounded-3xl shadow-xl border border-brand-red/10 max-w-xs hidden md:block">
              <p className="text-brand-red font-serif font-bold text-xl mb-2">Our Roots</p>
              <p className="text-brand-brown/60 text-sm italic">"Rooted in tradition, committed to purity. We are proud to be a local brand from Bihar."</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To provide every household with 100% pure and hygienic everyday essentials at an affordable price."
            },
            {
              icon: Heart,
              title: "Our Values",
              desc: "Honesty in sourcing, transparency in processing, and a deep commitment to our customers' health."
            },
            {
              icon: Users,
              title: "Future Goal",
              desc: "Expanding our range to include premium pulses and organic products, reaching every corner of India."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-brand-beige border border-brand-red/5 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-brown mb-4">{item.title}</h3>
              <p className="text-brand-brown/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Commitment List */}
        <div className="bg-brand-brown rounded-[3rem] p-12 md:p-20 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-center">Our Commitment to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Locally Sourced Premium Produce",
                "Zero Artificial Colors or Flavors",
                "Strict Hygiene Protocols",
                "Traditional Processing Methods",
                "Eco-friendly Packaging Initiatives",
                "Supporting Local Farming Communities"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-brand-gold shrink-0" />
                  <span className="text-lg text-white/80">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
