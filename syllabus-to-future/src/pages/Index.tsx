import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import podcastImg from '@/assets/podcast.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf1e5]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative text-center py-16 px-5 bg-[#fbf1e5] overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight"
          >
            Don&apos;t Just Learn it.
            <br />
            <motion.strong
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="text-[#7b68ee] inline-block"
            >
              Build it.
            </motion.strong>
          </motion.h1>

          {/* Podcast Interview Image with Float Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl md:max-w-3xl mx-auto mb-10"
          >
            <motion.img
              src={podcastImg}
              alt="MUSTARD Podcast Interview"
              className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-3xl border-4 border-white"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-5 bg-[#fbf1e5]"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Slanted label */}
          <motion.div
            variants={itemVariants}
            className="inline-block bg-[#7b68ee] text-white px-6 py-2 rounded-full text-xs md:text-sm font-semibold mb-8 shadow-lg transform -rotate-6"
          >
            Students learn in silos
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-2 leading-snug"
          >
            They memorize the &apos;what&apos;,
            <br />
            but miss the &apos;why&apos;
            <br />
            Why do they learn what they learn?
          </motion.h2>
        </div>
      </motion.section>

      {/* Dark Section with Cards */}
      <section className="py-24 px-5 relative overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto relative z-10"
        >
          <h2
            className="text-2xl md:text-3xl font-semibold text-white mb-10 text-left md:text-center leading-relaxed max-w-2xl md:max-w-3xl mx-auto"
          >
            We transform students from passive consumers of technology into active
            creators by connecting the subjects they learn today with the
            innovations of tomorrow.
          </h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {/* Green Card */}
            <motion.div variants={itemVariants}>
              <Card
                className="p-0 h-auto md:h-[420px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: '#37e2b4' }}
              >
                <motion.div
                  className="text-white h-full flex flex-col px-10 pt-10 pb-8"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
                    Evolution, Not
                    <br />
                    Addition
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#fff7eb] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: 'skewY(-3deg)' }}
                    >
                      <p className="opacity-90" style={{ transform: 'skewY(3deg)' }}>
                        We don&apos;t force a foreign curriculum on students. We show how
                        existing lessons evolve into advanced tech.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Purple Card - Context-First Learning */}
            <motion.div variants={itemVariants}>
              <Card
                className="p-0 h-auto md:h-[420px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: '#706cff' }}
              >
                <motion.div
                  className="text-white h-full flex flex-col px-10 pt-10 pb-8"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
                    Context-First
                    <br />
                    Learning
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#fff7eb] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: 'skewY(-3deg)' }}
                    >
                      <p className="opacity-90" style={{ transform: 'skewY(3deg)' }}>
                        We don&apos;t teach &quot;Robotics&quot;; we teach how physics and code
                        merge to create motion.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Yellow Card - Creator Mindset */}
            <motion.div variants={itemVariants}>
              <Card
                className="p-0 h-auto md:h-[420px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: '#ffbf1f', color: '#1c1c1c' }}
              >
                <motion.div
                  className="h-full flex flex-col px-10 pt-10 pb-8"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
                    Creator
                    <br />
                    Mindset
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#fff7eb] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: 'skewY(-3deg)' }}
                    >
                      <p className="opacity-90" style={{ transform: 'skewY(3deg)' }}>
                        We shift the focus from &quot;How do I use this device?&quot; to &quot;How do
                        I build this device?&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* School Lesson Section - White Background */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-5 bg-[#fbf1e5]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
          >
            Let us show you an example
          </motion.h2>
          <motion.div
            variants={scaleVariants}
            className="bg-[#e6ded1] rounded-3xl px-8 md:px-14 py-10 md:py-14 shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="flex items-start justify-between mb-10">
              <div className="inline-block bg-white text-gray-900 text-sm md:text-base font-medium px-6 py-3 rounded-full shadow-sm">
                The School Lesson
              </div>
              <div className="hidden md:block text-5xl font-semibold text-white/40 pr-2">
                01
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 items-center">
              <h3 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-900">
                Differentiation is used to find
                <br />
                the minimum and
                <br />
                maximum of a curve
              </h3>
              <div className="flex justify-center md:justify-end items-center">
                <div className="flex flex-col items-center gap-3">
                  <svg
                    viewBox="0 0 160 120"
                    className="w-32 h-24 text-black"
                  >
                    <path
                      d="M10 110 C 55 20, 105 20, 150 110"
                      fill="none"
                      stroke="black"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="10"
                      y1="108"
                      x2="150"
                      y2="108"
                      stroke="black"
                      strokeWidth="1"
                    />
                  </svg>
                  <span className="text-xs md:text-sm text-gray-800">
                    dy/dx = 0
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* MUSTARD Upgrade Section - Yellow Background */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-5"
        style={{ backgroundColor: '#ffc700' }}
      >
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            variants={scaleVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* White pill label */}
            <div className="inline-block bg-white text-gray-900 text-sm md:text-base font-semibold px-6 py-3 rounded-full shadow-sm mb-8">
              MUSTARD Upgrade
            </div>

            {/* Slanted purple tag (desktop only) */}
            <div className="hidden md:block absolute -top-4 right-4">
              <div className="bg-[#6b63ff] text-white text-sm md:text-base font-medium px-8 py-4 rounded-2xl shadow-lg transform -rotate-8">
                This is how neural networks learn!
              </div>
            </div>

            {/* Main copy */}
            <h3 className="mt-4 text-3xl md:text-5xl font-semibold text-black leading-tight max-w-3xl">
              AI detects which way error
              <br />
              goes down and moves in
              <br />
              that direction.
            </h3>
          </motion.div>
        </div>
      </motion.section>

      {/* The Build Section - Teal Background */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-5"
        style={{ backgroundColor: '#2bdba0' }}
      >
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            variants={scaleVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* White pill label */}
            <div className="inline-block bg-white text-gray-900 text-sm md:text-base font-semibold px-6 py-3 rounded-full shadow-sm mb-8">
              The Build
            </div>

            {/* Faint section number on desktop */}
            <div className="hidden md:block absolute top-6 right-6 text-5xl font-semibold text-white/40">
              03
            </div>

            {/* Main copy */}
            <h3 className="mt-2 text-3xl md:text-5xl font-semibold text-black leading-tight max-w-3xl">
              A self-driving bot that uses
              <br />
              calculus to mathematically
              <br />
              minimize steering error.
            </h3>
          </motion.div>
        </div>
      </motion.section>

      {/* Mentored by Masters */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-24 px-5 bg-[#fbf1e5]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-semibold mb-14 text-black"
          >
            Mentored by Masters
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
          >
            {/* PhD Scholars card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-black text-white rounded-[28px] overflow-hidden shadow-3xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                <div className="px-10 pt-10 pb-8 flex flex-col h-full">
                  <h3 className="text-3xl md:text-4xl font-semibold text-left mb-10 leading-tight">
                    PhD
                    <br />
                    Scholars
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#6b63ff] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: 'skewY(-4deg)' }}
                    >
                      <p
                        className="text-black opacity-90"
                        style={{ transform: 'skewY(4deg)' }}
                      >
                        Academic rigour delivered by doctorate holders who ensure
                        theoretical depth and accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Industry Leaders card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-black text-white rounded-[28px] overflow-hidden shadow-3xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                <div className="px-10 pt-10 pb-8 flex flex-col h-full">
                  <h3 className="text-3xl md:text-4xl font-semibold text-left mb-10 leading-tight">
                    Industry
                    <br />
                    Leaders
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#2bdba0] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: 'skewY(-4deg)' }}
                    >
                      <p
                        className="text-black opacity-90"
                        style={{ transform: 'skewY(4deg)' }}
                      >
                        Practical insights from engineering veterans who have
                        built the technologies of today.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-28 px-5 bg-gradient-to-br from-[#f5f5f5] to-white text-center relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Your Students Are Ready to<br />
            <strong className="text-[#7b68ee]">Build</strong>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-700 leading-relaxed"
          >
            Stop teaching them to just use technology. Partner with MUSTARD and teach them to master it.
          </motion.p>
          <motion.div variants={scaleVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <Button
                className="bg-[#7b68ee] hover:bg-[#6a5acd] text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() => navigate('/contact')}
                style={{ animation: 'pulse-glow 2s infinite' }}
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;