import { Hero } from "./components/Hero";
import { ProjectSummary } from "./components/ProjectSummary";
import { ProblemStatement } from "./components/ProblemStatement";
import { DesignThinking } from "./components/DesignThinking";
import { Solutions } from "./components/Solutions";
import { AppFlow } from "./components/AppFlow";
import { Wireframes } from "./components/Wireframes";
import { DesignSystem } from "./components/DesignSystem";
import { HighFidelity } from "./components/HighFidelity";
import { Prototype } from "./components/Prototype";
import { Reflection } from "./components/Reflection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white dark">
      <Hero />
      <ProjectSummary />
      <ProblemStatement />
      <DesignThinking />
      <Solutions />
      <AppFlow />
      <Wireframes />
      <DesignSystem />
      <HighFidelity />
      <Prototype />
      <Reflection />
      <Footer />
    </div>
  );
}
