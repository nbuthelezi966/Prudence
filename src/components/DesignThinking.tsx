import { Heart, Target, Lightbulb, Hammer, TestTube } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

export function DesignThinking() {
  const stages = [
    {
      icon: Heart,
      title: "Empathize",
      description: "Understanding the user's world through observation, interviews, and gathering insights about pain points and motivations.",
      image: "https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJ2aWV3JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYzMzI0ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#00FF66"
    },
    {
      icon: Target,
      title: "Define",
      description: "Synthesizing information into a clear problem statement focused on real challenges rather than symptoms or assumptions.",
      image: "https://images.unsplash.com/photo-1759868937753-34859b641bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlja3klMjBub3RlcyUyMGJyYWluc3Rvcm1pbmd8ZW58MXx8fHwxNzYzMzcyMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#FFB800"
    },
    {
      icon: Lightbulb,
      title: "Ideate",
      description: "Generating a range of possible solutions through sketches, brainstorming, and exploring creative alternatives beyond the obvious.",
      image: "https://images.unsplash.com/photo-1759868937753-34859b641bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlja3klMjBub3RlcyUyMGJyYWluc3Rvcm1pbmd8ZW58MXx8fHwxNzYzMzcyMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#00D4FF"
    },
    {
      icon: Hammer,
      title: "Prototype",
      description: "Converting ideas into low- and high-fidelity wireframes that reflect the final direction and simulate real usage scenarios.",
      image: "https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2hlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzMjY2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#9D4EDD"
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Evaluating the design with users, gathering feedback, and iterating quickly to improve clarity and performance.",
      image: "https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJ2aWV3JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYzMzI0ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#FF3333"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">
            <span className="text-[#00FF66]">🧠</span> Design Thinking Process
          </h2>
          <div className="h-1 w-24 mx-auto bg-[#00FF66] mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A structured yet flexible approach rooted in empathy and iteration, ensuring every design decision is grounded in real user needs.
          </p>
        </div>

        {/* Stages */}
        <div className="space-y-12">
          {stages.map((stage, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <ImageWithFallback
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-lg opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: `${stage.color}20`, border: `2px solid ${stage.color}` }}>
                      <stage.icon className="w-6 h-6" style={{ color: stage.color }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-[#00FF66]/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: `${stage.color}20`, border: `2px solid ${stage.color}` }}>
                      <span className="text-xl" style={{ color: stage.color }}>{index + 1}</span>
                    </div>
                    <h3 className="text-3xl" style={{ color: stage.color }}>{stage.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {stage.description}
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Arrow */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            {stages.map((stage, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full" style={{ backgroundColor: `${stage.color}20`, border: `1px solid ${stage.color}` }}>
                    <stage.icon className="w-4 h-4" style={{ color: stage.color }} />
                  </div>
                  <p className="text-xs mt-2 text-gray-500">{stage.title}</p>
                </div>
                {index < stages.length - 1 && (
                  <div className="w-8 h-0.5 mx-2 bg-gradient-to-r from-gray-700 to-gray-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
