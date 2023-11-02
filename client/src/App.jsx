import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieLists from "./pages/MovieLists";
import SideNavBar from "./components/SideNavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/all" element={<MovieLists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
