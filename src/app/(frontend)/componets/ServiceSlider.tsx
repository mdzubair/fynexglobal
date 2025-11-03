import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ServiceSlider() {
  const services = [
    {
      title: "Our Services",
      text: "Discover our professional trading and investment services designed for your success.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
      title: "Introducing Broker",
      text: "Partner with us and earn commissions through our Introducing Broker program.",
      img: "https://images.unsplash.com/photo-1581092334707-30b0b9c219b4",
    },
    {
      title: "Portfolio Management",
      text: "Optimize your portfolio with expert insights and analytics.",
      img: "https://images.unsplash.com/photo-1581090465941-1e7a7a3d8e23",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const auto = setInterval(
      () => setIndex((i) => (i + 1) % services.length),
      5000
    );
    return () => clearInterval(auto);
  }, []);

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setIndex((i) => (i - 1 + services.length) % services.length)
          }
          className="p-2 bg-slate-200 rounded-full hover:bg-slate-300"
        >
          <ChevronLeft />
        </motion.button>
        <div className="flex-1 mx-4 relative min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0 text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={services[index].img}
                alt={services[index].title}
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-slate-800">
                {services[index].title}
              </h3>
              <p className="text-slate-600 max-w-xl mx-auto">
                {services[index].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIndex((i) => (i + 1) % services.length)}
          className="p-2 bg-slate-200 rounded-full hover:bg-slate-300"
        >
          <ChevronRight />
        </motion.button>
      </div>
    </section>
  );
}
