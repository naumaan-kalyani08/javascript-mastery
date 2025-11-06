import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import ConditionConcept from "../Components/ConditionConcept";
import Header from "../Components/Header";
import LoopConcepts from "../Components/LoopConcepts";
import "../style/Common.css";
import CustomLoopComponent from "../Components/CustomLoopComponent";
import ArrayCocept from "../Components/ArrayCocept";
import RealWorldPractice from "../Components/RealWorldPractice";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conditional-concept" element={<ConditionConcept />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/loops" element={<LoopConcepts />} />
        <Route path="/custom-loops" element={<CustomLoopComponent />} />
        <Route path="/array" element={<ArrayCocept />} />
        <Route path="/real-examples" element={<RealWorldPractice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
