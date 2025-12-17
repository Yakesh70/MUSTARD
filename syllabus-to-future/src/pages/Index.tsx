import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import podcastImg from "@/assets/podcast.png";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const scrollScaleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Scroll-linked scaling animation
  const { scrollYProgress: scaleProgress } = useScroll({
    target: scrollScaleRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scaleProgress, [0, 0.5, 1], [0.5, 0.9, 1]);
  const borderRadius = useTransform(scaleProgress, [0, 0.5, 1], [40, 0, 0]);
  const overlayOpacity = useTransform(
    scaleProgress,
    [0.4, 0.5, 0.6],
    [0, 0, 1]
  );

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const slideFromRightVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
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
            className="text-4xl md:text-6xl font-normal mb-8 text-black leading-tight"
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
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mb-10"
            style={{ maxWidth: "1158px" }}
          >
            <motion.img
              src={podcastImg}
              alt="MUSTARD Podcast Interview"
              className="w-full object-cover shadow-3xl border-4 border-white"
              style={{
                height: "558px",
                borderRadius: "20px",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
              }}
            />
          </motion.div> */}
        </motion.div>
      </section>

      {/* Scroll-Linked Scaling Video Section */}
      <section
        ref={scrollScaleRef}
        className="relative bg-[#fbf1e5]"
        style={{ height: "250vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{
              scale,
              borderRadius,
            }}
            className="relative w-full max-w-7xl mx-4 aspect-video bg-gray-300 shadow-2xl overflow-hidden"
          >
            {/* Video/Content Container */}
            <div className="w-full h-full flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                {/* Replace with your video source */}
                <source src="/video.mp4" type="video/mp4" />
              </video>

              {/* Placeholder if no video */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#7b68ee] to-[#6a5acd]">
                <div className="text-center text-white">
                  <h3 className="text-5xl md:text-7xl font-bold mb-4">
                    Your Video Here
                  </h3>
                  <p className="text-xl md:text-2xl opacity-90">
                    Scales as you scroll
                  </p>
                </div>
              </div> */}
            </div>

            {/* Text Overlay - Fades in at full scale */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none"
            >
              <div className="text-center text-white px-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Experience MUSTARD
                </h2>
                <p className="text-xl md:text-2xl">
                  Transforming Education Through Technology
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-24 px-5 bg-[#fbf1e5]"
      >
        <div className="max-w-5xl mx-auto ">
          {/* Slanted label */}
          <motion.div
            variants={itemVariants}
            className="inline-block bg-[#7b68ee] text-white px-8 py-3 rounded-md text-base md:text-xl font-normal mb-8 shadow-lg transform -rotate-6"
          >
            Students learn in silos
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-normal leading-tight text-center mx-auto"
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
      <section
        className="py-24 px-5 relative overflow-hidden"
        style={{ backgroundColor: "#1c1c1c" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto relative z-10"
        >
          <h2 className="text-2xl md:text-4xl font-normal text-white mb-10 text-right leading-relaxed max-w-2xl md:max-w-3xl ml-auto pl-40">
            We transform students from passive consumers of technology into
            active creators by connecting the subjects they learn today with the
            innovations of tomorrow.
          </h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {/* Green Card */}
            <motion.div variants={slideFromRightVariants}>
              <Card
                className="p-0 h-auto md:h-[420px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: "#37e2b4" }}
              >
                <motion.div
                  className="text-white h-full flex flex-col px-10 pt-10 pb-8"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-3xl md:text-4xl font-normal leading-tight mb-10">
                    Evolution, Not
                    <br />
                    Addition
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#fff7eb] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: "skewY(-3deg)" }}
                    >
                      <p
                        className="opacity-90"
                        style={{ transform: "skewY(3deg)" }}
                      >
                        We don&apos;t force a foreign curriculum on students. We
                        show how existing lessons evolve into advanced tech.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Purple Card - Context-First Learning */}
            <motion.div variants={slideFromRightVariants}>
              <Card
                className="p-0 h-auto md:h-[420px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: "#706cff" }}
              >
                <motion.div
                  className="text-white h-full flex flex-col px-10 pt-10 pb-8"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-3xl md:text-4xl font-normal leading-tight mb-10">
                    Context-First
                    <br />
                    Learning
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#fff7eb] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: "skewY(-3deg)" }}
                    >
                      <p
                        className="opacity-90"
                        style={{ transform: "skewY(3deg)" }}
                      >
                        We don&apos;t teach &quot;Robotics&quot;; we teach how
                        physics and code merge to create motion.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Yellow Card - Creator Mindset */}
            <motion.div variants={slideFromRightVariants}>
              <Card
                className="p-0 h-auto md:h-[420px] transition-all duration-500 ease-smooth hover:shadow-2xl rounded-[28px] overflow-hidden"
                style={{ backgroundColor: "#ffbf1f", color: "#1c1c1c" }}
              >
                <motion.div
                  className="h-full flex flex-col px-10 pt-10 pb-8"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <h3 className="text-3xl md:text-4xl font-normal leading-tight mb-10">
                    Creator
                    <br />
                    Mindset
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#fff7eb] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: "skewY(-3deg)" }}
                    >
                      <p
                        className="opacity-90"
                        style={{ transform: "skewY(3deg)" }}
                      >
                        We shift the focus from &quot;How do I use this
                        device?&quot; to &quot;How do I build this device?&quot;
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
        className="py-5 px-5 bg-[#fbf1e5]"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-semibold text-black px-12 md:px-10 pt-14 "
        >
          Let us show you an example
        </motion.h2>
        <div className="max-w-6xl mx-auto mt-14">
          <motion.div
            variants={slideUpVariants}
            className="bg-[#e6ded1] px-12 md:px-16 py-16 md:py-8 relative shadow-lg hover:shadow-xl transition-shadow duration-500"
            style={{ borderRadius: "24px" }}
          >
            <div className="inline-block bg-white text-black text-base font-semibold px-8 py-3 rounded-md shadow-sm mb-12">
              The School Lesson
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-16 items-start py-20">
              <h3 className="text-4xl md:text-5xl font-normal leading-tight text-black">
                Differentiation is used to find
                <br />
                the minimum and
                <br />
                maximum of a curve
              </h3>
              <div className="flex justify-center md:justify-end items-start pt-4">
                <div className="flex flex-col items-end gap-1">
                  <svg
                    viewBox="0 0 240 180"
                    className="w-56 h-40 md:w-64 md:h-44"
                  >
                    {/* Parabola curve */}
                    <path
                      d="M 30 160 Q 120 40, 210 160"
                      fill="none"
                      stroke="#2c2c2c"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    {/* Horizontal axis line */}
                    <line
                      x1="20"
                      y1="160"
                      x2="220"
                      y2="160"
                      stroke="#2c2c2c"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-black italic font-light">
                    dy/dx=0
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
        className="py-5 px-5 bg-[#fbf1e5]"
      >
        <div className="max-w-6xl mx-auto mt-14">
          <motion.div
            variants={slideUpVariants}
            className="bg-[#ffc700] px-12 md:px-16 py-16 md:py-8 relative shadow-lg hover:shadow-xl transition-shadow duration-500"
            style={{ borderRadius: "24px" }}
          >
            {/* White pill label */}

            <div className="inline-block bg-white text-black text-base font-semibold px-8 py-3 rounded-md shadow-sm mb-12">
              MUSTARD Upgrade
            </div>

            {/* Slanted purple tag */}
            <div className="absolute top-8 right-8 md:top-40 md:right-56">
              <div
                className="bg-[#6b63ff] text-white text-base md:text-lg font-medium px-8 py-4 shadow-lg transform rotate-6"
                style={{ borderRadius: "16px" }}
              >
                This is how neural networks learn!
              </div>
            </div>

            {/* Main copy */}
            <div className="relative pb-14 ">
              <h3 className="text-4xl md:text-5xl font-normal text-black leading-tight max-w-2xl py-20">
                AI detects which way error
                <br />
                goes down and moves in
                <br />
                that direction.
              </h3>

              {/* Number indicator */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-7xl md:text-8xl font-bold text-white/20">
                02
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Build Section - Teal Background */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-5 px-5 bg-[#fbf1e5]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={slideUpVariants}
            className="bg-[#2bdba0] px-12 md:px-16 py-16 md:py-8 relative shadow-lg hover:shadow-xl transition-shadow duration-500"
            style={{ borderRadius: "24px" }}
          >
            {/* White pill label */}
            <div className="inline-block bg-white text-black text-base font-semibold px-8 py-3 rounded-md shadow-sm mb-12">
              The Build
            </div>

            {/* Main copy */}
            <div className="relative pb-14 ">
              <h3 className="text-4xl md:text-5xl font-normal text-black leading-tight max-w-2xl  py-20">
                A self-driving bot that uses
                <br />
                calculus to mathematically
                <br />
                minimize steering error.
              </h3>

              {/* Number indicator */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-7xl md:text-8xl font-bold text-white/20">
                03
              </div>
            </div>
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
        <div className="max-w-6xl mx-auto text-center px-32">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-semibold mb-14 text-black"
          >
            Mentored by Masters
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4"
          >
            {/* PhD Scholars card */}
            <motion.div variants={slideFromRightVariants}>
              <Card className="bg-black text-white rounded-md overflow-hidden shadow-3xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                <div className="px-10 pt-10 pb-8 flex flex-col h-full">
                  <h3 className="text-4xl md:text-5xl font-normal text-left mb-10 leading-tight">
                    PhD
                    <br />
                    Scholars
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#6b63ff] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px]"
                      style={{ transform: "skewY(-4deg)" }}
                    >
                      <p
                        className="text-black opacity-90"
                        style={{ transform: "skewY(4deg)" }}
                      >
                        Academic rigour delivered by
                        <br />
                        doctorate holders who ensure
                        <br />
                        theoretical depth and accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Industry Leaders card */}
            <motion.div variants={slideFromRightVariants}>
              <Card className="bg-black text-white rounded-md overflow-hidden shadow-3xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                <div className="px-10 pt-10 pb-8 flex flex-col h-full">
                  <h3 className="text-4xl md:text-5xl font-normal text-left mb-10 leading-tight">
                    Industry
                    <br />
                    Leaders
                  </h3>
                  <div className="mt-auto">
                    <div
                      className="bg-[#2bdba0] text-black text-sm md:text-base leading-relaxed px-6 py-6 rounded-[24px] text-align-left"
                      style={{ transform: "skewY(-4deg)" }}
                    >
                      <p
                        className="text-black opacity-90 text-align-left"
                        style={{ transform: "skewY(4deg)" }}
                      >
                        Practical insights from
                        <br />
                        engineering veterans who have
                        <br />
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
            className="text-5xl md:text-7xl font-normal mb-8 leading-tight"
          >
            Your Students Are Ready to
            <br />
            <strong className="text-[#7b68ee]">Build</strong>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-700 leading-relaxed"
          >
            Stop teaching them to just use technology. Partner with MUSTARD and
            teach them to master it.
          </motion.p>
          <motion.div variants={scaleVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <Button
                className="bg-[#7b68ee] hover:bg-[#6a5acd] text-white px-12 py-6 text-xl font-normal rounded-md shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() => navigate("/contact")}
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
