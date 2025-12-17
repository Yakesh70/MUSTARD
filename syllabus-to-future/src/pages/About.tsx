import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const schools = [
    { name: "SBIOA Matric Hr Sec School", location: "Anna Nagar" },
    { name: "Velammal Matric Hr Sec School", location: "Mogappair" },
    { name: "St Joseph Matric Hr Sec School", location: "Perambur" },
    { name: "St Joseph Matric Hr Sec School", location: "Shenoy Nagar" },
    { name: "Sri Sankara Matric Hr Sec School", location: "Adyar" },
    { name: "Shri Natesan Vidyasala Matric Hr Sec School", location: "T Nagar" },
    { name: "St Joseph Matric Hr Sec School", location: "Royapuram" },
    { name: "St Joseph Matric Hr Sec School", location: "Purasawalkam" },
    { name: "St Joseph Matric Hr Sec School", location: "Vepery" },
    { name: "St Joseph Matric Hr Sec School", location: "Kilpauk" },
    { name: "St Joseph Matric Hr Sec School", location: "Anna Nagar" },
    { name: "St Joseph Matric Hr Sec School", location: "Egmore" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* About Us Section */}
      <section className="py-20 px-5 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-black">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            MUSTARD was born from a realization - <em>The world is changing faster than our textbooks.</em>{" "}
            While technology accelerates exponentially, the way we teach the fundamentals has remained static.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 px-5" style={{ backgroundColor: '#ffc700' }}>
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto">
            A future where every student leaves school not just with a report card,
            but with the confidence to engineer solutions for the world's problems.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20 px-5 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-black animate-fade-in">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Relevance Card */}
            <Card className="overflow-hidden hover-lift transition-all duration-300 shadow-lg" style={{ backgroundColor: '#38b488', border: 'none' }}>
              <div className="h-48 relative" style={{ backgroundColor: '#38b488' }}>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-white"></div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-black">Relevance</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Every lesson must answer &quot;Why does this matter?&quot;
                </p>
              </CardContent>
            </Card>

            {/* Integration Card */}
            <Card className="overflow-hidden hover-lift transition-all duration-300 shadow-lg" style={{ backgroundColor: '#7b68ee', border: 'none' }}>
              <div className="h-48 relative" style={{ backgroundColor: '#7b68ee' }}>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-white"></div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-black">Integration</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Technology is not a separate subject; it is the application of all subjects.
                </p>
              </CardContent>
            </Card>

            {/* Empowerment Card */}
            <Card className="overflow-hidden hover-lift transition-all duration-300 shadow-lg" style={{ backgroundColor: '#ffc700', border: 'none' }}>
              <div className="h-48 relative" style={{ backgroundColor: '#ffc700' }}>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-white"></div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-3 text-black">Empowerment</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Students should feel capable, not intimidated, by complex tech.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schools We Serve Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-black animate-fade-in">
            Schools We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="p-6 bg-[#f5f5f5] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <h3 className="font-bold text-sm mb-2 text-black leading-tight">
                  {school.name}
                </h3>
                <p className="text-xs text-gray-600">{school.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;