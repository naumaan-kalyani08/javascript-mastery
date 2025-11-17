// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "../pages/HomePage";
import ConditionConcept from "../Components/ConditionConcept";
import LoopConcepts from "../Components/LoopConcepts";
import CustomLoopComponent from "../Components/CustomLoopComponent";
import ArrayCocept from "../Components/ArrayCocept";
import RealWorldPractice from "../Components/RealWorldPractice";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname}>
        <Route
          index
          element={
            <AnimatedPage>
              <HomePage />
            </AnimatedPage>
          }
        />
        <Route
          path="conditional-concept"
          element={
            <AnimatedPage>
              <ConditionConcept />
            </AnimatedPage>
          }
        />
        <Route
          path="contact"
          element={
            <AnimatedPage>
              <div>Contact Page</div>
            </AnimatedPage>
          }
        />
        <Route
          path="loops"
          element={
            <AnimatedPage>
              <LoopConcepts />
            </AnimatedPage>
          }
        />
        <Route
          path="custom-loops"
          element={
            <AnimatedPage>
              <CustomLoopComponent />
            </AnimatedPage>
          }
        />
        <Route
          path="array"
          element={
            <AnimatedPage>
              <ArrayCocept />
            </AnimatedPage>
          }
        />
        <Route
          path="real-examples"
          element={
            <AnimatedPage>
              <RealWorldPractice />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
