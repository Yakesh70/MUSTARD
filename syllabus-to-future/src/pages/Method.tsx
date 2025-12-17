import { Card } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import teachingMethod from '@/assets/teaching-method.jpg';

const Method = () => {
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
            The Evolutionary
            <br />
            <motion.strong
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="text-[#7b68ee] inline-block"
            >
              Framework
            </motion.strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg md:text-xl text-black mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We believe that advanced technology is simply basic principles scaled up.
            <br />
            Our methodology takes students on a journey from the textbooks to technology
          </motion.p>
        </motion.div>
      </section>

      {/* Evolutionary Framework Section */}
      <section className="py-16 px-5 bg-[#fbf1e5]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* The Root (Concept) */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="bg-[#e8e0d4] rounded-[28px] p-8 relative">
              <div className="bg-white rounded-full px-6 py-2 inline-block mb-4">
                <span className="text-black font-semibold text-sm">The Root (Concept)</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Matrices.</h3>
              <p className="text-black text-lg leading-relaxed">
                Students solve standard row-and-column
                <br />
                addition problems from their Class 12 textbook.
              </p>
            </div>
          </motion.div>

          {/* The Stem (Context) */}
          <motion.div
            variants={itemVariants}
            className="mb-8 relative"
          >
            <div 
              className="rounded-[28px] p-8 text-black relative overflow-hidden"
              style={{ backgroundColor: '#ffbf1f' }}
            >
              <div className="bg-white rounded-full px-6 py-2 inline-block mb-4 absolute top-8 right-8">
                <span className="text-black font-semibold text-sm">The Stem (Context)</span>
              </div>
              <div className="max-w-2xl">
                <p className="text-lg leading-relaxed font-medium">
                  A digital image is just a giant matrix. To a computer, a
                  <br />
                  photograph is literally a grid of numbers representing light
                  <br />
                  intensity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Leaf (Experimentation) */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div 
              className="rounded-[28px] p-8 text-white relative"
              style={{ backgroundColor: '#706cff' }}
            >
              <div className="bg-white rounded-full px-6 py-2 inline-block mb-4">
                <span className="text-black font-semibold text-sm">The Leaf (Experimentation)</span>
              </div>
              <p className="text-lg leading-relaxed">
                Math as a Filter. Students add +50 to every
                <br />
                number in the grid. Instantly, a dark image
                <br />
                becomes bright
              </p>
            </div>
          </motion.div>

          {/* The Flower (Innovation) */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div 
              className="rounded-[28px] p-8 text-black relative overflow-hidden"
              style={{ backgroundColor: '#37e2b4' }}
            >
              <div className="bg-white rounded-full px-6 py-2 inline-block mb-4 absolute top-8 right-8">
                <span className="text-black font-semibold text-sm">The Flower (Innovation)</span>
              </div>
              <div className="max-w-2xl">
                <p className="text-lg leading-relaxed font-medium">
                  Building the Tool. Students code an algorithm to detect
                  <br />
                  where numbers change suddenly. The result? A
                  <br />
                  Document Scanner that auto-detects and crops page
                  <br />
                  edges.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* From Textbooks to Technology Section */}
      <section className="py-24 px-5 relative overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          >
            From Textbooks to
            <br />
            Technology
          </motion.h2>

          {/* Track Navigation */}
          <motion.nav
            variants={itemVariants}
            className="flex justify-center gap-2 md:gap-4 mb-12"
          >
            <button className="bg-[#7b68ee] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-[#6b5ce6] transition-colors duration-300 shadow-lg">
              Physics Track
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg border border-gray-200">
              Maths Track
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg border border-gray-200">
              Maths Track
            </button>
          </motion.nav>

          {/* Evolution Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Basic Arithmetic & Matrices */}
            <motion.div variants={itemVariants}>
              <Card
                className="p-0 h-auto md:h-[320px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: '#e8e0d4' }}
              >
                <motion.div
                  className="text-black h-full flex flex-col px-8 pt-8 pb-6"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                    Basic Arithmetic &
                    <br />
                    Matrices
                  </h3>
                  <div className="mt-auto">
                    <div className="bg-[#fff7eb] text-black text-sm leading-relaxed px-4 py-4 rounded-[20px]">
                      <p className="opacity-90">
                        Learning how to arrange numbers in rows and columns and perform operations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Linear Algebra */}
            <motion.div variants={itemVariants}>
              <Card
                className="p-0 h-auto md:h-[320px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: '#ffbf1f' }}
              >
                <motion.div
                  className="text-black h-full flex flex-col px-8 pt-8 pb-6"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                    Linear Algebra
                  </h3>
                  <div className="mt-auto">
                    <div className="bg-[#fff7eb] text-black text-sm leading-relaxed px-4 py-4 rounded-[20px]">
                      <p className="opacity-90">
                        Understanding how massive grids of numbers (tensors) can represent complex data like images or language.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Neural Networks & AI */}
            <motion.div variants={itemVariants}>
              <Card
                className="p-0 h-auto md:h-[320px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: '#37e2b4' }}
              >
                <motion.div
                  className="text-black h-full flex flex-col px-8 pt-8 pb-6"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                    Neural
                    <br />
                    Networks & AI
                  </h3>
                  <div className="mt-auto">
                    <div className="bg-[#fff7eb] text-black text-sm leading-relaxed px-4 py-4 rounded-[20px]">
                      <p className="opacity-90">
                        Building AI models where matrix multiplication determines how a computer 'thinks' and learns.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


    </div>
  );
};

export default Method;