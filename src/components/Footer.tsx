import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-black border-t border-[#00FF66]/30 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#00FF66 1px, transparent 1px), linear-gradient(90deg, #00FF66 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl mb-4">
            Let's Create Something <span className="text-[#00FF66]">Exceptional</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm passionate about solving complex problems through thoughtful, user-centered design. Let's connect and discuss how I can help bring clarity to your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="bg-[#00FF66] text-black hover:bg-[#00FF66]/90">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button variant="outline" className="border-[#00FF66] text-[#00FF66] hover:bg-[#00FF66]/10">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00FF66] to-transparent mb-12"></div>

        {/* Bio & Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl mb-4 text-[#00FF66]">About Prudence</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am a UX/UI Designer who creates clear, efficient, and human-centered digital experiences—especially for data-heavy, mission-critical environments. I combine empathy-driven research with strong interaction design principles to translate complex workflows into intuitive, high-performing interfaces.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about designing systems that empower users to make confident, informed decisions, whether they're managing flights, coordinating operations, or navigating real-time analytics.
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h4 className="text-xl mb-4 text-[#00FF66]">Core Skills</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "User Research",
                "Information Architecture",
                "Wireframing & Prototyping",
                "Design Systems",
                "Interaction Design",
                "Usability Testing",
                "Visual Design",
                "UX Writing"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66]"></div>
                  <span className="text-sm text-gray-400">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <h4 className="text-xl mb-4 text-center text-[#00FF66]">Tools & Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Figma",
              "FigJam",
              "Adobe XD",
              "Photoshop",
              "Illustrator",
              "Notion",
              "Miro"
            ].map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-sm text-gray-400 hover:border-[#00FF66]/50 hover:text-[#00FF66] transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="mb-12 p-6 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800">
          <h4 className="text-xl mb-4 text-center text-[#00FF66]">My Design Process</h4>
          <p className="text-sm text-gray-400 text-center max-w-4xl mx-auto">
            I follow a structured yet flexible design process rooted in Design Thinking, ensuring that every design decision is grounded in real user needs: <span className="text-white">Empathize</span> → <span className="text-white">Define</span> → <span className="text-white">Ideate</span> → <span className="text-white">Prototype</span> → <span className="text-white">Test</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#00FF66]/10 hover:text-[#00FF66]">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#00FF66]/10 hover:text-[#00FF66]">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#00FF66]/10 hover:text-[#00FF66]">
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2024 Prudence Buthelezi. Designed with clarity, intention, and purpose.
          </p>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#00FF66]/10 to-transparent blur-3xl"></div>
    </footer>
  );
}
