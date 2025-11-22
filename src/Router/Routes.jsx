// AppRouter.jsx
import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import "../style/Common.css";
import AnimatedRoutes from "./AnimatedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
