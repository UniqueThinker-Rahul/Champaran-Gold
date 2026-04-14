import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-brown mb-6"
          >
            Get in <span className="text-brand-red">Touch</span>
          </motion.h1>
          <p className="text-brand-brown/60 text-lg">
            Have questions about our products or want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-red/5">
              <h2 className="text-3xl font-serif font-bold text-brand-brown mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-1">Our Location</h4>
                    <p className="text-brand-brown/60 text-sm leading-relaxed">
                      Village: [Your Village Name], <br />
                      District: West Champaran, <br />
                      State: Bihar, India - [Your Pincode]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-1">Phone Number</h4>
                    <p className="text-brand-brown/60 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown mb-1">Email Address</h4>
                    <p className="text-brand-brown/60 text-sm">champarangold@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-brand-red/10">
                <h4 className="font-bold text-brand-brown mb-4">Connect with us on WhatsApp</h4>
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 w-full md:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-red/5"
          >
            <h2 className="text-3xl font-serif font-bold text-brand-brown mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-brand-brown font-medium">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="rounded-xl border-brand-red/10 focus:border-brand-red" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-brand-brown font-medium">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" className="rounded-xl border-brand-red/10 focus:border-brand-red" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-brand-brown font-medium">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl border-brand-red/10 focus:border-brand-red" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-brand-brown font-medium">Your Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] rounded-xl border-brand-red/10 focus:border-brand-red" />
              </div>
              <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white rounded-full py-7 text-lg font-bold">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
