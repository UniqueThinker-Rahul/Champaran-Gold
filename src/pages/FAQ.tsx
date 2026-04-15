import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

// --- FAQ DATA ---
const faqData = [
  {
    category: "About Brand",
    items: [
      {
        question: "What is Champaran Gold?",
        answer: "Champaran Gold is a premium Indian food brand dedicated to bringing you the finest, 100% natural spices, flours, and grocery essentials directly from the fertile lands of West Champaran."
      },
      {
        question: "What makes your products unique?",
        answer: "Our products are ethically sourced from local farmers, sun-dried, and stone-ground using traditional methods. This ensures the natural oils, flavors, and nutritional value are completely preserved."
      },
      {
        question: "Where are you located?",
        answer: "We are proudly rooted in West Champaran, Bihar, India. Our processing and packaging facilities are located locally to ensure maximum freshness and support the local farming community."
      }
    ]
  },
  {
    category: "Product & Quality",
    items: [
      {
        question: "Are your spices 100% natural?",
        answer: "Yes, absolutely. All Champaran Gold products are 100% natural, unadulterated, and free from any artificial colors, flavors, or harmful chemicals."
      },
      {
        question: "Do your products contain preservatives?",
        answer: "No. We believe in the pure, uncompromised essence of food. Our products rely on high-quality sourcing and advanced moisture-lock packaging to maintain a long shelf life without preservatives."
      },
      {
        question: "How do you ensure the purity of your spices?",
        answer: "Our spices undergo a rigorous triple-cleaning process and are ground in temperature-controlled environments to prevent the loss of volatile essential oils. Every batch is quality-tested before packaging."
      },
      {
        question: "Are your pulses polished?",
        answer: "No, our pulses (dals) are completely unpolished to retain their maximum dietary fiber, natural proteins, and essential B-vitamins."
      }
    ]
  },
  {
    category: "Packaging & Storage",
    items: [
      {
        question: "How are Champaran Gold products packaged?",
        answer: "We use premium, food-grade, moisture-resistant packaging that locks in the aroma and freshness of the spices from the moment they are ground until they reach your kitchen."
      },
      {
        question: "What is the shelf life of your products?",
        answer: "Most of our whole spices and flours have a shelf life of 6 to 12 months, while ground spices are best consumed within 9 months for maximum flavor. Please check the 'Best Before' date on individual packs."
      },
      {
        question: "How should I store the spices at home?",
        answer: "To maintain maximum freshness, store your spices in an airtight container in a cool, dry, and dark place. Avoid keeping them directly above the stove where heat and humidity fluctuate."
      }
    ]
  },
  {
    category: "Delivery & Availability",
    items: [
      {
        question: "Do you deliver Pan-India?",
        answer: "Yes! We ship our premium products across India. We partner with reliable courier services to ensure your order reaches you safely and on time."
      },
      {
        question: "How long does delivery usually take?",
        answer: "Standard delivery takes 3-5 business days for metro cities, and 5-7 business days for non-metro and remote locations."
      },
      {
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within India. However, we are actively working on expanding our logistics to bring the taste of Champaran to kitchens worldwide soon."
      }
    ]
  },
  {
    category: "Orders & Support",
    items: [
      {
        question: "How can I track my order?",
        answer: "Once your order is dispatched, you will receive an email and SMS with your tracking link and courier partner details. You can also track your order directly from your account dashboard."
      },
      {
        question: "What is your return and refund policy?",
        answer: "Since we deal in consumable food products, we do not accept returns. However, if you receive a damaged, tampered, or incorrect item, please contact our support team within 48 hours for a replacement or refund."
      },
      {
        question: "How do I contact customer support?",
        answer: "You can reach out to us via email at support@champarangold.com or call our helpline number provided in the website footer. We are available Monday to Saturday, 9 AM to 6 PM."
      }
    ]
  },
  {
    category: "Licensing & Trust",
    items: [
      {
        question: "Are your products FSSAI approved?",
        answer: "Yes, Champaran Gold is fully certified by the Food Safety and Standards Authority of India (FSSAI). Our license number is proudly displayed on all our product packaging and website footer."
      },
      {
        question: "Is my payment information secure?",
        answer: "Absolutely. We use industry-standard, bank-level encryption and secure payment gateways (like Razorpay) to process all transactions. We do not store your credit/debit card information."
      },
      {
        question: "Do you sell wholesale or bulk orders for restaurants?",
        answer: "Yes, we do. For bulk orders, restaurant partnerships, and B2B inquiries, please email our sales team directly at b2b@champarangold.com for a custom quote."
      }
    ]
  }
];

// --- ACCORDION ITEM COMPONENT ---
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className="border-b border-[#D8Cbb6] last:border-none"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none group"
      >
        <span className={`text-base md:text-lg font-serif font-semibold transition-colors duration-300 ${isOpen ? "text-[#991b1b]" : "text-[#4a3b32] group-hover:text-[#991b1b]"}`}>
          {question}
        </span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors duration-300 ${isOpen ? "bg-[#991b1b] text-[#F7F1E5]" : "bg-[#EAE0D0] text-[#4a3b32] group-hover:bg-[#991b1b] group-hover:text-[#F7F1E5]"}`}
        >
          {isOpen ? <Minus className="h-4 w-4 md:h-5 md:w-5" /> : <Plus className="h-4 w-4 md:h-5 md:w-5" />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm md:text-base text-[#5c4a3d] font-sans leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MAIN FAQ PAGE COMPONENT ---
export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedCategories = activeCategory === "All" 
    ? faqData 
    : faqData.filter(cat => cat.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#4a3b32] selection:bg-[#991b1b] selection:text-[#F7F1E5] font-sans pt-28 pb-24">
      
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#EAE0D0] rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-[#EAE0D0] rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 mb-6 bg-[#EAE0D0] rounded-full shadow-sm"
          >
            <HelpCircle className="h-6 w-6 text-[#991b1b]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3d2e25] mb-4"
          >
            Frequently Asked <span className="text-[#991b1b] italic">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[#6d5b4e] max-w-2xl mx-auto"
          >
            Everything you need to know about Champaran Gold, our premium ingredients, packaging, and shipping process.
          </motion.p>
        </div>

        {/* Category Filter Tabs (Optional but good for UX) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
        >
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeCategory === "All" ? "bg-[#991b1b] text-[#F7F1E5] shadow-md" : "bg-[#EAE0D0] text-[#5c4a3d] hover:bg-[#d8cbb6]"}`}
          >
            All Questions
          </button>
          {faqData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeCategory === cat.category ? "bg-[#991b1b] text-[#F7F1E5] shadow-md" : "bg-[#EAE0D0] text-[#5c4a3d] hover:bg-[#d8cbb6]"}`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 md:p-10 shadow-sm border border-[#EAE0D0]"
        >
          {displayedCategories.map((category, idx) => (
            <div key={idx} className={idx !== 0 ? "mt-12 md:mt-16" : ""}>
              {/* Only show category title if viewing 'All' */}
              {activeCategory === "All" && (
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3d2e25]">
                    {category.category}
                  </h2>
                  <div className="flex-grow h-px bg-[#EAE0D0]"></div>
                </div>
              )}
              
              <div className="flex flex-col">
                {category.items.map((item, itemIdx) => (
                  <AccordionItem 
                    key={itemIdx} 
                    question={item.question} 
                    answer={item.answer} 
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#6d5b4e] mb-4">Still have questions?</p>
          <a 
            href="mailto:support@champarangold.com" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4a3b32] text-[#F7F1E5] rounded-full font-semibold hover:bg-[#991b1b] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contact Our Support Team
          </a>
        </motion.div>

      </div>
    </div>
  );
}
