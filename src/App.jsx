import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import TourPackages from "./Components/TourPackages/TourPackages";
import Hotel from "./Components/Hotel/Hotel";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tourPackages" element={<TourPackages />}></Route>
        <Route path="/hotel" element={<Hotel />}></Route>
      </Routes>
    </>
  );
}

export default App;
