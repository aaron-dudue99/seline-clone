import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const feedback: string[] = [
  "Seline is the kind of product I'm happy to open every day.",
  "I love their easy to use interface. No more Google Analytics for me.",
  "Seline combines incredible power with exceptional user-friendliness.",
  "It's refreshing to use an analytics tool that just works without any hassle.",
];

const FeedbackLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % feedback.length);
    }, 5000); // 5 seconds per text
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="inline-flex"
        >
          &ldquo;{feedback[index]}&rdquo;
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FeedbackLoop;
