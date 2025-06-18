"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ChevronRight,
  Rocket,
  Star,
  GraduationCap,
  Briefcase,
  Database,
  Code,
  Server,
} from 'lucide-react';

export default function LandingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    background: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
    const formUrl = 'https://docs.google.com/forms/d/e/1mxDg0OPyx-wiKqQE6_E0cZZgtkPJUqBsobV8x30IYE8/formResponse';

    const formDataToSend = new FormData();
    formDataToSend.append('entry.609283002', formData.name);        // Name
    formDataToSend.append('entry.896222564', formData.email);       // Email
    formDataToSend.append('entry.2122394806', formData.phone);      // Phone
    formDataToSend.append('entry.432900038', formData.background);  // Background
    formDataToSend.append('entry.2057984392', date?.toLocaleDateString() || ''); // Date

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const features = [
    {
      icon: <Database className='w-6 h-6 text-cyan-400' />,
      title: 'Practical Training',
      description: 'Learn by working on real projects we build at Innoflexus',
    },
    {
      icon: <GraduationCap className='w-6 h-6 text-purple-400' />,
      title: 'Expert Instruction',
      description: 'Learn from Shankar Reddy, Co-founder & industry practitioner',
    },
    {
      icon: <Briefcase className='w-6 h-6 text-pink-400' />,
      title: 'Career Transition',
      description: 'Get job-ready with resume prep and interview coaching',
    },
  ];

  const specializations = [
    {
      icon: <Database className='w-8 h-8 text-cyan-400' />,
      title: 'Data Science',
      description: 'Master ML models, statistical analysis, and data visualization',
    },
    {
      icon: <Code className='w-8 h-8 text-purple-400' />,
      title: 'Data Analytics',
      description: 'Excel in BI tools, SQL, and business insights generation',
    },
    {
      icon: <Server className='w-8 h-8 text-pink-400' />,
      title: 'Data Engineering',
      description: 'Learn data pipelines, ETL, and cloud infrastructure',
    },
  ];

  const testimonials = [
    {
      quote:
        'The practical approach at Innoflexus helped me transition from support to a data analyst role in just 3 months.',
      name: 'Aishwarya',
      location: 'Pune',
      rating: 5,
    },
    {
      quote:
        'Learning from actual projects Shankar sir was building gave me confidence to handle real-world data challenges.',
      name: 'Nikhil',
      location: 'Hyderabad',
      rating: 5,
    },
  ];

  return (
    <div className='min-h-screen bg-gray-950 text-white relative overflow-hidden'>
      {/* Grid background */}
      <div className='absolute inset-0 bg-[url("/grid.png")] bg-[length:300px_300px] opacity-10' />
      
      {/* Glow effects */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div className='absolute top-1/4 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl' />
        <div className='absolute bottom-1/3 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl' />
        <div className='absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl' />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative z-10'
      >
        <div className='container mx-auto px-4 py-28 md:py-36'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='max-w-3xl mx-auto text-center'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='inline-flex items-center bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 py-1 mb-6 text-sm text-cyan-300'
            >
              <Rocket className='w-4 h-4 mr-2' />
              <span>Next cohort starting soon</span>
              <ChevronRight className='w-4 h-4 ml-1' />
            </motion.div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400'>
              Master Data Careers<br />with Real Projects
            </h1>
            <p className='text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
              Transform into a data professional in 3 months with Innoflexus&rsquo;s practical program.
              First month common foundation, then specialize in Data Science, Analytics or Engineering.
            </p>


            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className='inline-block'
            >
              <Button 
                size='lg'
                className='text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/20'
              >
                Enroll Now
                <ChevronRight className='w-4 h-4 ml-2' />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className='container mx-auto px-4 py-16 md:py-24 relative z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300'>
            Why Choose Innoflexus Training?
          </h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            We train you on actual projects we&rsquo;re building for our clients, not just academic exercises.
          </p>

        </motion.div>
        
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className='bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 h-full hover:border-cyan-400/30 transition-all group'>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg mb-4 group-hover:bg-cyan-500/20 transition-all'>
                    {feat.icon}
                  </div>
                  <h3 className='text-xl font-semibold mb-2 text-white'>{feat.title}</h3>
                  <p className='text-gray-400 group-hover:text-gray-300 transition-colors'>{feat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Structure Section */}
      <section className='bg-gradient-to-br from-gray-900/80 to-purple-900/20 py-16 md:py-24 border-t border-b border-cyan-400/10 relative z-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300'>
                Our 3-Month Intensive Program
              </h2>
              <ul className='space-y-4'>
                {[
                  'Month 1: Common foundation for all students',
                  'Months 2-3: Specialized tracks based on your career goals',
                  'Daily live sessions with Shankar Reddy',
                  'Hands-on projects from Innoflexus client work',
                  'Lifetime access to course materials and community',
                ].map((text, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className='flex items-start group'
                  >
                    <div className='flex items-center justify-center p-1 bg-cyan-500/10 rounded-full mr-3 group-hover:bg-cyan-500/20 transition-all'>
                      <Check className='w-4 h-4 text-cyan-400' />
                    </div>
                    <span className='text-gray-300 group-hover:text-white transition-colors'>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <div className='absolute -inset-4 bg-cyan-500/10 rounded-xl blur-lg' />
              <Card className='relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 shadow-2xl'>
                <CardHeader>
                  <CardTitle className='text-2xl text-white'>Specialization Tracks</CardTitle>
                  <CardDescription className='text-cyan-300'>
                    Choose your path after Month 1
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-6'>
                    {specializations.map((spec, idx) => (
                      <div key={idx} className='relative pl-6 group'>
                        <div className='absolute left-0 top-1 w-3 h-3 rounded-full bg-cyan-400 group-hover:animate-pulse' />
                        <div className='flex items-start'>
                          <div className='mr-4 mt-1'>
                            {spec.icon}
                          </div>
                          <div>
                            <h4 className='font-medium text-white mb-1 group-hover:text-cyan-300 transition-colors'>
                              {spec.title}
                            </h4>
                            <p className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>
                              {spec.description}
                            </p>
                          </div>
                        </div>
                        <div className='absolute left-[5px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 to-transparent' />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className='container mx-auto px-4 py-16 md:py-24 relative z-10'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 md:p-10'
          >
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0'>
                <div className='w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-1'>
                  <div className='w-full h-full rounded-full bg-gray-800 overflow-hidden'>
                    {/* Placeholder for instructor image */}
                    <div className='w-full h-full bg-gray-700 flex items-center justify-center text-4xl font-bold text-cyan-400'>
                      SR
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-white mb-2'>Shankar Reddy</h3>
                <p className='text-cyan-400 mb-4'>Co-founder & Chief Instructor, Innoflexus Solutions</p>
                <p className='text-gray-300 mb-4'>
                  With over 8 years of hands-on experience building data solutions for businesses, 
                  I&rsquo;ll train you on the exact skills we use daily at Innoflexus to deliver digital 
                  transformation for our clients.
                </p>
 
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm'>Data Science</span>
                  <span className='px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm'>AI Solutions</span>
                  <span className='px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm'>Digital Transformation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 md:py-24 relative z-10'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='max-w-4xl mx-auto text-center mb-16'
          >
            <h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300'>
              Success Stories
            </h2>
            <p className='text-lg text-gray-400'>
              Our alumni are working at top companies and startups
            </p>
          </motion.div>
          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className='bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 h-full hover:border-cyan-400/30 transition-all'>
                  <CardContent className='p-6'>
                    <div className='flex mb-4'>
                      {[...Array(5)].map((_, star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className='italic text-gray-300 mb-4 text-lg leading-relaxed'>
                      &quot;{t.quote}&quot;
                    </blockquote>
                    <div className='text-cyan-400 font-medium'>
                      {t.name}, {t.location}
                    </div>
                    <div className='mt-2 text-xs text-purple-400'>Innoflexus Graduate</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className='bg-gradient-to-r from-purple-900/40 via-gray-900/80 to-cyan-900/40 py-16 md:py-24 border-t border-b border-cyan-400/10 relative z-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-3xl font-bold mb-4 text-white'>
                Ready to Transform Your Career?
              </h2>
              <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
                Join our next cohort. Limited seats available for personalized attention.
              </p>
              <ul className='space-y-3 mb-8'>
                {[
                  '3-month intensive program',
                  '1 month common + 2 months specialization',
                  'Flexible payment options available',
                  'Placement assistance',
                ].map((txt, idx) => (
                  <li key={idx} className='flex items-center'>
                    <div className='flex items-center justify-center p-1 bg-cyan-500/10 rounded-full mr-3'>
                      <Check className='w-4 h-4 text-cyan-400' />
                    </div>
                    <span className='text-gray-300'>{txt}</span>
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
              <Card className='bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 shadow-2xl'>
                <CardContent className='p-6 space-y-4'>
                  <h3 className='text-2xl font-semibold text-white'>Apply Now</h3>
                  <AnimatePresence mode='wait'>
                    {!submitted ? (
                      <motion.form
                        key='form'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className='space-y-4'
                      >
                        <Input
                          name='name'
                          placeholder='Full Name'
                          value={formData.name}
                          onChange={handleChange}
                          className='bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50'
                          required
                        />
                        <Input
                          name='email'
                          type='email'
                          placeholder='Email Address'
                          value={formData.email}
                          onChange={handleChange}
                          className='bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50'
                          required
                        />
                        <Input
                          name='phone'
                          placeholder='Phone Number'
                          value={formData.phone}
                          onChange={handleChange}
                          className='bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50'
                          required
                        />
                        <Textarea
                          name='background'
                          placeholder='Your background and career goals'
                          value={formData.background}
                          onChange={handleChange}
                          className='bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400/50 min-h-[100px]'
                        />
                        <div>
                          <p className='text-sm mb-2 text-gray-400'>Preferred Start Date:</p>
                          <Calendar
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                            className='rounded-md border bg-gray-800/50 border-gray-700/50 text-white'
                          />
                        </div>
                        <Button
                          type='submit'
                          size='lg'
                          className='w-full mt-4 text-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg shadow-cyan-500/20'
                        >
                          Apply Now
                        </Button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key='success'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='text-center py-8'
                      >
                        <div className='inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4'>
                          <Check className='w-8 h-8 text-green-400' />
                        </div>
                        <h3 className='text-xl font-semibold mb-2 text-white'>
                          Application Received!
                        </h3>
                        <p className='text-gray-400 mb-6'>
                          We&rsquo;ll review your application and get back to you within 24 hours.
                          Check your email for next steps.
                        </p>
                        <Button
                          variant='outline'
                          size='lg'
                          className='w-full text-lg border-gray-700 hover:bg-gray-800/50 hover:text-cyan-300'
                          onClick={() => setSubmitted(false)}
                        >
                          Apply Again
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
      <footer className='bg-gray-900/90 backdrop-blur-sm py-8 border-t border-gray-800/50 relative z-10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <h3 className='text-xl font-bold text-white'>Innoflexus Solutions</h3>
              <p className='text-gray-400 text-sm'>Digital Transformation Experts</p>
            </div>
            <div className='text-center text-gray-400 text-sm'>
              <p>© {new Date().getFullYear()} Innoflexus Solutions. All rights reserved.</p>
            </div>
            <div className='flex justify-center space-x-6 mt-4 md:mt-0'>
              <a href='#' className='hover:text-cyan-400 transition-colors'>
                Terms
              </a>
              <a href='#' className='hover:text-purple-400 transition-colors'>
                Privacy
              </a>
              <a href='#' className='hover:text-pink-400 transition-colors'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}