import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Devs from "../pages/Devs";
import Home from "../pages/Home";
import GlobalStyle from '../styles/global';

function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devs" element={<Devs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;