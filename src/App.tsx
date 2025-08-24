import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PortfolioSelection from "./components/PortfolioSelection/PortfolioSelection";
import { Route, Routes } from "react-router-dom";
import Portraits from "./components/Portraits/Portraits";
import Events from "./components/Events/Events";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/*" element={<PortfolioSelection />} />
        <Route path="/portfolio/photo/portraits" element={<Portraits />} />
        <Route path="/portfolio/photo/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
