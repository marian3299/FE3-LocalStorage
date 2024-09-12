import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favs from "./pages/Favs";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
