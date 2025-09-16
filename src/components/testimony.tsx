import { Quote } from "lucide-react";

const Testimony = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        {/* Icon */}
        <Quote className="mx-auto h-12 w-12 text-yellow-500 mb-6" />

        {/* Quote */}
        <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed italic">
          &quot;At Golden Shield, our mission has always been to build not only
          stronger and safer structures, but also lasting trust with every
          client we serve.&quot;
        </p>

        {/* CEO Name */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">
            Mr. Abdulrahman Alsalem
          </h3>
          <p className="text-gray-400">Chairman & Founder</p>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
