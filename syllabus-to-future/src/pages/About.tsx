import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const darkSectionRef = useRef(null);

  const { scrollYProgress: darkSectionProgress } = useScroll({
    target: darkSectionRef,
    offset: ["start end", "end start"],
  });
  const schools = [
    { name: "SBIOA Matric Hr Sec School", location: "Anna Nagar" },
    { name: "Velammal Matric Hr Sec School", location: "Mogappair" },
    { name: "St Joseph Matric Hr Sec School", location: "Perambur" },
    { name: "St Joseph Matric Hr Sec School", location: "Shenoy Nagar" },
    { name: "Sri Sankara Matric Hr Sec School", location: "Adyar" },
    {
      name: "Shri Natesan Vidyasala Matric Hr Sec School",
      location: "T Nagar",
    },
    { name: "St Joseph Matric Hr Sec School", location: "Royapuram" },
    { name: "St Joseph Matric Hr Sec School", location: "Purasawalkam" },
    { name: "St Joseph Matric Hr Sec School", location: "Vepery" },
    { name: "St Joseph Matric Hr Sec School", location: "Kilpauk" },
    { name: "St Joseph Matric Hr Sec School", location: "Anna Nagar" },
    { name: "St Joseph Matric Hr Sec School", location: "Egmore" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero and Vision Wrapper */}
      <div className="relative" style={{ height: "200vh" }}>
        {/* About Us Section - Sticky Hero */}
        <section
          className="sticky top-0 py-32 px-5 bg-[#FAF4EC] h-screen flex items-center justify-center"
          style={{ zIndex: 1 }}
        >
          <div className="max-w-auto mx-auto text-center animate-fade-in">
            <h1
              className="text-7xl md:text-8xl font-normal mb-16 text-black tracking-tight"
              style={{
                fontWeight: 400,
                fontSize: "110px",
                lineHeight: "90%",
                letterSpacing: "-3%",
              }}
            >
              About Us
            </h1>
            <p
              className="text-2xl md:text-3xl text-black leading-relaxed max-w-auto mx-auto font-medium"
              style={{
                fontWeight: 400,
                fontSize: "48px",
                lineHeight: "100%",
                letterSpacing: "-3%",
              }}
            >
              MUSTARD was born from a realization -{" "}
              <em className="italic font-normal">
                The <br />
                world is changing faster than our textbooks.
              </em>
              <br />
              While technology accelerates exponentially,
              <br />
              the way we teach the fundamentals has
              <br />
              remained static.
            </p>
          </div>
        </section>
      </div>

      {/* Our Vision Section */}
      <section
        className="py-32 px-5"
        style={{ marginTop: "-100vh", zIndex: 10, position: "relative" }}
      >
        <div className="max-w-full mx-auto">
          <div className="bg-[#FFC00D] rounded-3xl px-8 text-center h-screen flex flex-col justify-center items-center ">
            <h2
              className="text-6xl md:text-7xl font-normal mb-12 text-black"
              style={{
                fontWeight: 400,
                fontSize: "96px",
                lineHeight: "100%",
                letterSpacing: "-3%",
              }}
            >
              Our Vision
            </h2>
            <p
              className="text-2xl md:text-3xl text-black leading-relaxed max-w-auto mx-auto font-normal"
              style={{
                fontWeight: 400,
                fontSize: "48px",
                lineHeight: "100%",
                letterSpacing: "-3%",
              }}
            >
              A future where every student leaves school
              <br />
              not just with a report card,
              <br />
              but with the confidence to engineer solutions
              <br />
              for the world's problems.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section - Scroll-Driven Stacking */}
      <section
        ref={darkSectionRef}
        className="relative"
        style={{
          backgroundColor: "#FAF4EC",
          paddingBottom: "200px",
        }}
      >
        <div className="h-[300vh] md:h-[400vh]">
          <div
            className="sticky top-0 flex items-center justify-center px-5 md:px-0"
            style={{ minHeight: "100vh" }}
          >
            <div className="max-w-auto mx-auto w-full px-6">
              <h2
                className="text-6xl md:text-7xl font-normal mb-20 text-center text-black"
                style={{
                  fontWeight: 400,
                  fontSize: "96px",
                  lineHeight: "100%",
                  letterSpacing: "-3%",
                }}
              >
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Green Card - Third to enter */}
                <motion.div
                  style={{
                    y: useTransform(
                      darkSectionProgress,
                      [0.5, 0.75, 1],
                      [400, 0, 0]
                    ),
                    opacity: useTransform(
                      darkSectionProgress,
                      [0.5, 0.65, 0.75],
                      [0, 1, 1]
                    ),
                  }}
                  className="w-full"
                >
                  <Card
                    className="p-0 h-[400px] md:h-[476px] rounded-[10px] overflow-hidden w-full border-0"
                    style={{ backgroundColor: "#37e2b4" }}
                  >
                    <motion.div
                      className="text-black h-full flex flex-col px-4 md:px-5 pt-4 md:pt-5 pb-6 md:pb-8"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <h3
                        className="text-3xl md:text-4xl font-normal leading-tight mb-6 md:mb-10"
                        style={{
                          fontWeight: 400,
                          fontSize: "44px",
                          lineHeight: "100%",
                          letterSpacing: "-3%",
                        }}
                      >
                        Relevance
                      </h3>
                      <div className="mt-auto">
                        <div
                          className="bg-[#FAF4EC] rounded-xl px-4 md:px-5 py-4 md:py-5 h-[180px] md:h-[216px] flex flex-col items-end justify-end"
                          style={{
                            clipPath:
                              "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                            paddingTop: "2rem",
                          }}
                        >
                          <p
                            className="opacity-90 text-black text-sm md:text-base"
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 400,
                              fontSize: "24px",
                              lineHeight: "120%",
                              letterSpacing: "-3%",
                              textAlign: "right",
                            }}
                          >
                            Every lesson must answer "Why does this matter?"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>

                {/* Purple Card - Second to enter */}
                <motion.div
                  style={{
                    y: useTransform(
                      darkSectionProgress,
                      [0.25, 0.5, 1],
                      [400, 0, 0]
                    ),
                    opacity: useTransform(
                      darkSectionProgress,
                      [0.25, 0.4, 0.5],
                      [0, 1, 1]
                    ),
                  }}
                  className="w-full"
                >
                  <Card
                    className="p-0 h-[400px] md:h-[476px] rounded-[10px] overflow-hidden w-full border-0"
                    style={{ backgroundColor: "#7371FC" }}
                  >
                    <motion.div
                      className="text-black h-full flex flex-col px-4 md:px-5 pt-4 md:pt-5 pb-6 md:pb-8"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <h3
                        className="text-3xl md:text-4xl font-normal leading-tight mb-6 md:mb-10"
                        style={{
                          fontWeight: 400,
                          fontSize: "44px",
                          lineHeight: "100%",
                          letterSpacing: "-3%",
                        }}
                      >
                        Integration
                      </h3>
                      <div className="mt-auto">
                        <div
                          className="bg-[#FAF4EC] rounded-xl px-4 md:px-5 py-4 md:py-5 h-[180px] md:h-[216px] flex flex-col items-end justify-end"
                          style={{
                            clipPath:
                              "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                            paddingTop: "2rem",
                          }}
                        >
                          <p
                            className="opacity-90 text-sm md:text-base"
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 400,
                              fontSize: "24px",
                              lineHeight: "120%",
                              letterSpacing: "-3%",
                              textAlign: "right",
                            }}
                          >
                            Technology is not a 
                            <br />
                            separate subject; it is the 
                            <br />
                            application of all subjects.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>

                {/* Yellow Card - First to enter */}
                <motion.div
                  style={{
                    y: useTransform(
                      darkSectionProgress,
                      [0, 0.25, 1],
                      [400, 0, 0]
                    ),
                    opacity: useTransform(
                      darkSectionProgress,
                      [0, 0.15, 0.25],
                      [0, 1, 1]
                    ),
                  }}
                  className="w-full"
                >
                  <Card
                    className="p-0 h-[400px] md:h-[476px] rounded-[10px] overflow-hidden w-full border-0"
                    style={{ backgroundColor: "#ffbf1f" }}
                  >
                    <motion.div
                      className="text-black h-full flex flex-col px-4 md:px-5 pt-4 md:pt-5 pb-6 md:pb-8"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <h3
                        className="text-3xl md:text-4xl font-normal leading-tight mb-6 md:mb-10"
                        style={{
                          fontWeight: 400,
                          fontSize: "44px",
                          lineHeight: "100%",
                          letterSpacing: "-3%",
                        }}
                      >
                        Empowerment
                      </h3>
                      <div className="mt-auto">
                        <div
                          className="bg-[#FAF4EC] rounded-xl px-4 md:px-5 py-4 md:py-5 h-[180px] md:h-[216px] flex flex-col items-end justify-end"
                          style={{
                            clipPath:
                              "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                            paddingTop: "2rem",
                          }}
                        >
                          <p
                            className="opacity-90 text-sm md:text-base"
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 400,
                              fontSize: "24px",
                              lineHeight: "120%",
                              letterSpacing: "-3%",
                              textAlign: "right",
                            }}
                          >
                             Students should feel 
                             <br />
                             capable, not intimidated,
                             <br />
                             by complex tech.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        /* Schools We Serve Section */
        <section className="py-32 px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-normal mb-20 text-center text-black">
              Schools We Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0.2rem]">
              {schools.map((school, index) => (
                <div
                  key={index}
                  className="p-8 bg-transparent rounded-3xl border border-[#EAE4D8] shadow-sm"
                >
                  <h3 className="text-xl font-normal mb-2 text-black leading-tight">
                    {school.name}
                  </h3>
                  <p className="text-lg italic text-gray-700">
                    {school.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    </div>
  );
};

export default About;
