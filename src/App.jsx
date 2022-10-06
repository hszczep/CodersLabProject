import { Routes, Route } from "react-router-dom";
import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import "./css/App.css";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import MenuRoutes from "./routes/menuRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/*" element={<MenuRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
