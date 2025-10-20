import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import ConditionConcept from "../Components/ConditionConcept";
import Header from "../Components/Header";
import LoopConcepts from "../Components/LoopConcepts";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conditional-concept" element={<ConditionConcept />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="loops" element={<LoopConcepts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
