import "./index.css";
import "./output.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./componets/Nav";
import Footer from "./componets/Footer";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/:country" element={<CountryDetails />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
