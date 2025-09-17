import About from "@/components/about-us";
import Gallery4 from "@/components/blocks/gallery4";
import Contact from "@/components/contact-us";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/sticky-footer";
import Testimony from "@/components/testimony";

const demoData = {
  title: "Projects",
  description:
    "Explore some of Dubai's most iconic real estate and construction projects. From luxury skyscrapers to innovative infrastructure, these case studies highlight excellence in design, engineering, and development.",
  items: [
    {
      id: "burj-khalifa",
      title: "Burj Khalifa",
      description:
        "The world's tallest skyscraper, an engineering marvel combining residential, commercial, and hospitality spaces with breathtaking design.",
      href: "/",
      image: "/building.jpg",
    },
    {
      id: "dubai-marina-towers",
      title: "Dubai Marina Towers",
      description:
        "A cluster of luxury residential towers overlooking the marina, offering modern living with waterfront views and state-of-the-art amenities.",
      href: "/",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "palm-jumeirah-villas",
      title: "Palm Jumeirah Villas",
      description:
        "Exclusive private villas on the world-famous Palm Jumeirah, blending luxury architecture with serene beachfront living.",
      href: "/",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
    {
      id: "dubai-mall-expansion",
      title: "Dubai Mall Expansion",
      description:
        "A massive retail and entertainment hub expansion, enhancing shopping experiences with innovative architecture and integrated leisure facilities.",
      href: "/",
      image: "/building2.jpg",
    },
    {
      id: "expo-2020-site",
      title: "Expo 2020 Dubai Site",
      description:
        "A world-class exhibition site showcasing pavilions, sustainability-focused architecture, and advanced infrastructure for global visitors.",
      href: "/",
      image: "/building3.jpg",
    },
    {
      id: "bluewaters-island",
      title: "Bluewaters Island",
      description:
        "A mixed-use development featuring luxury residences, retail, and entertainment attractions including the iconic Ain Dubai observation wheel.",
      href: "/",
      image: "/building4.jpg",
    },
    {
      id: "one-zabeel",
      title: "One Za’abeel",
      description:
        "A futuristic skyscraper featuring innovative design and world-class office and residential spaces, known for its twisting architectural style.",
      href: "/",
      image: "/building1.jpg",
    },
    {
      id: "deira-island-project",
      title: "Deira Island Project",
      description:
        "A major waterfront development including residential, commercial, and leisure destinations, designed to reshape Dubai’s northern coast.",
      href: "/",
      image: "/building.jpg",
    },
    {
      id: "dubai-creek-harbour",
      title: "Dubai Creek Harbour",
      description:
        "A new city within Dubai featuring the tallest tower in the region, eco-friendly neighborhoods, and a vibrant waterfront lifestyle.",
      href: "/",
      image: "/building3.jpg",
    },
    {
      id: "mudon-community",
      title: "Mudon Residential Community",
      description:
        "A sprawling suburban development offering family-friendly villas, parks, and community amenities in a tranquil setting.",
      href: "/",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    },
  ],
};

const test = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Gallery4 {...demoData} />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default test;
