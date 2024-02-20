import "./App.css";
import { Home } from "./views/home/home";
import { Documentation } from "./views/documentation/documentation";
import { NavBar } from "../src/Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" h-screen w-screen bg-blue900">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation/>} />
      </Routes>
    </div>
  );
}

export default App;
