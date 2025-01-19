import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
