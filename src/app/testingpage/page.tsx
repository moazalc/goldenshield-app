import About from "@/components/about-us";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects";
import { StickyFooter } from "@/components/sticky-footer";
import Testimony from "@/components/testimony";

const test = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Testimony />
      <Projects />
      {/* <StickyFooter /> */}
    </div>
  );
};

export default test;
