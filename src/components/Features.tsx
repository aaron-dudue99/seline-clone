import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import dashboard from "../assets/images/m-dashboard.webp";
import funnels from "../assets/images/m-funnels.webp";
import journey from "../assets/images/m-journey.webp";
import visitors from "../assets/images/m-visitors.webp";

const tabs = [
  { name: "Dashboard", image: dashboard, alt: "Dashboard" },
  { name: "Visitors", image: visitors, alt: "Visitors" },
  { name: "Funnels", image: funnels, alt: "Funnels" },
  { name: "Journey", image: journey, alt: "Journey" },
];

const Features = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [topOffset, setTopOffset] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  useEffect(() => {
    if (imageRef.current) {
      const imageHeight = imageRef.current.offsetHeight;
      const buttonHeight = 40; // Tailwind h-10
      setTopOffset(imageHeight - buttonHeight / 2);
      setLoaded(true);
    }
  }, []); // run only once on mount

  const currentTab = tabs.find((tab) => tab.name === activeTab) || tabs[0];

  return (
    <>
      {/* Image with AnimatePresence */}
      <div className="w-full flex-col items-center relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentTab.name}
            ref={imageRef}
            src={currentTab.image}
            alt={currentTab.alt}
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Animated Buttons */}
      {loaded && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-30 bg-white/50 backdrop-blur-sm rounded-full border-border/30 shadow-sm"
          style={{ top: `${topOffset}px` }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            role="tablist"
            className="inline-flex gap-1 sm:gap-4 h-10 items-center justify-center rounded p-1 text-black"
          >
            {tabs.map((tab) => {
              const isActive = tab.name === activeTab;
              return (
                <button
                  key={tab.name}
                  role="tab"
                  onClick={() => setActiveTab(tab.name)}
                  className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full font-medium transition cursor-pointer text-[14px]
                    ${isActive ? "bg-black text-white" : "hover:bg-secondary"}`}
                >
                  <span className="whitespace-nowrap">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Features;
