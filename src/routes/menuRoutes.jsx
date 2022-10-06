import Map from "../components/Map/Map";
import Menu from "../components/Menu/Menu";
import { Routes, Route } from "react-router-dom";

const MenuRoutes = () => {
  return (
    <div className="menu-routes">
      <Menu />
      <div className="app-content">
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/dashboard" />
        </Routes>
      </div>
    </div>
  );
};

export default MenuRoutes;
