import Services from "./services";
import { NumberTicker } from "./ui/number-ticker";
import { TextAnimate } from "./ui/text-animate";

const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 flex flex-col gap-16">
        {/* Top Row: Heading + Paragraphs */}
        <div className="">
          {/* Left: About Us Heading */}
          <TextAnimate
            className="text-4xl font-bold text-yellow-500 text-center mb-4"
            animation="blurInUp"
            by="character"
            once
          >
            About Us
          </TextAnimate>

          {/* Right: Paragraphs */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Golden Shield Company has gained preference and distinction among
              companies, with the testimony of banks and companies, financial
              financing, integrity of dealing with all and the trust of
              customers.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Since its inception, it has specialized in real estate brokerage
              in the sale and purchase of real estate, electronic trading,
              purchase and sale of land and real estate, various contracting
              works, and all trade business such as construction works,
              finishing works, electrical works, decoration works and other
              works related to the field of general contracting.
            </p>
          </div>
        </div>

        {/* Bottom Row: Stats */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* 25 Years of Experience */}
          <div className="flex flex-col items-center border-b-2 border-yellow-500 pb-4 gap-2">
            <NumberTicker
              value={25}
              className="text-6xl lg:text-8xl font-bold text-gray-900"
            />
            <span className="text-xl lg:text-2xl font-medium text-gray-700 text-center">
              Years of Experience
            </span>
          </div>

          {/* 100 Projects Built */}
          <div className="flex flex-col items-center border-b-2 border-yellow-500 pb-4 gap-2">
            <NumberTicker
              value={100}
              className="text-6xl lg:text-8xl font-bold text-gray-900"
            />
            <span className="text-xl lg:text-2xl font-medium text-gray-700 text-center">
              Projects Built
            </span>
          </div>
        </div>
      </div>
      {/* Servics  */}
      <div className="mt-20 pt-12" id="services">
        <Services />
      </div>
    </section>
  );
};

export default About;
