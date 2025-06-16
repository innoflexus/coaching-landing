"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  Rocket,
  Star,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function LandingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    background: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400" />, 
      title: "Industry-Ready Skills",
      description: "Learn exactly what companies are looking for in 2025",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: "Expert Instruction",
      description: "Learn from a Startup CTO with real-world experience",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-pink-400" />,
      title: "Career Support",
      description: "Resume reviews, mock interviews, and placement guidance",
    },
  ];

  const testimonials = [
    {
      quote:
        "This program changed my life. I got my first data science job within 2 months of finishing the course.",
      name: "Aishwarya",
      location: "Pune",
      rating: 5,
    },
    {
      quote:
        "Learning directly from someone who's building real AI products gave me an edge in interviews.",
      name: "Nikhil",
      location: "Hyderabad",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[url('/cyberpunk-grid.png')] bg-[length:300px_300px] opacity-20" />
      
      {/* Neon glow effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="container mx-auto px-4 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 py-1 mb-6 text-sm text-cyan-300"
            >
              <Rocket className="w-4 h-4 mr-2" />
              <span>Next batch starting soon</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Master Data Science<br />in the Digital Age
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your career in just 3 months with our cutting-edge program.
              Learn AI, Machine Learning & Data Engineering from cyber professionals.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button 
                size="lg"
                className="text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/20"
              >
                Enroll Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
            Why Our Program Stands Out
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We deliver future-proof skills through immersive, tech-driven learning.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 h-full hover:border-cyan-400/30 transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg mb-4 group-hover:bg-cyan-500/20 transition-all">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feat.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 py-16 md:py-24 border-t border-b border-cyan-400/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
                Cyber Learning Experience
              </h2>
              <ul className="space-y-4">
                {[
                  "Live VR-enabled sessions with industry leaders",
                  "Hands-on hacking projects with real datasets",
                  "1:1 mentorship from AI specialists",
                  "NFT-based certification",
                  "Lifetime access to neural network",
                ].map((text, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="flex items-start group"
                  >
                    <div className="flex items-center justify-center p-1 bg-cyan-500/10 rounded-full mr-3 group-hover:bg-cyan-500/20 transition-all">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-cyan-500/10 rounded-xl blur-lg" />
              <Card className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Neural Curriculum</CardTitle>
                  <CardDescription className="text-cyan-300">
                    Next-gen learning path
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      ["Neural Foundations", "Python, Cyber SQL, Data Hacking"],
                      ["Machine Intelligence", "Deep Learning, AI Algorithms"],
                      ["Cyber Projects", "Blockchain Data Systems"],
                    ].map(([month, desc], idx) => (
                      <div key={idx} className="relative pl-6 group">
                        <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-cyan-400 group-hover:animate-pulse" />
                        <h4 className="font-medium text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {month}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {desc}
                        </p>
                        <div className="absolute left-[5px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 to-transparent" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
              Cyber Graduates Speak
            </h2>
            <p className="text-lg text-gray-400">
              Our alumni are building the future across the metaverse
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 h-full hover:border-cyan-400/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="italic text-gray-300 mb-4 text-lg leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                    <div className="text-cyan-400 font-medium">
                      {t.name}, {t.location}
                    </div>
                    <div className="mt-2 text-xs text-purple-400">Verified Cyber Graduate</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="bg-gradient-to-r from-purple-900/40 via-gray-900/80 to-cyan-900/40 py-16 md:py-24 border-t border-b border-cyan-400/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Ready for Cyber Evolution?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Join our next neural cohort. Limited quantum slots available.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Fully immersive virtual learning",
                  "30-day neuro-adaptation guarantee",
                  "Crypto payment options",
                ].map((txt, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="flex items-center justify-center p-1 bg-cyan-500/10 rounded-full mr-3">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-gray-300">{txt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">Neural Application</h3>
                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <Input
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50"
                          required
                        />
                        <Input
                          name="email"
                          type="email"
                          placeholder="Neuro-Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50"
                          required
                        />
                        <Input
                          name="phone"
                          placeholder="Neural Comms ID"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50"
                          required
                        />
                        <Textarea
                          name="background"
                          placeholder="Your cyber-background and neuro-goals"
                          value={formData.background}
                          onChange={handleChange}
                          className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50 min-h-[100px]"
                        />
                        <div>
                          <p className="text-sm mb-2 text-gray-400">Preferred Neural Initiation:</p>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border bg-gray-800/50 border-gray-700/50 text-white"
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full mt-4 text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/20"
                        >
                          Initiate Enrollment
                        </Button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                          <Check className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          Neural Sync Complete!
                        </h3>
                        <p className="text-gray-400 mb-6">
                          Your application has been uploaded to our neural network.
                          Expect quantum contact within 24 cycles.
                        </p>
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full text-lg border-gray-700 hover:bg-gray-800/50 hover:text-cyan-300"
                          onClick={() => setSubmitted(false)}
                        >
                          New Synaptic Connection
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm py-8 border-t border-gray-800/50 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} NeuroFlex Academy. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Quantum Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Neural Privacy
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Synaptic Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}