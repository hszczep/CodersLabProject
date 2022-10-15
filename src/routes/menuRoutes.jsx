import Map from "../components/Map/Map";
import Menu from "../components/Menu/Menu";
import Rating from "../components/Rating/Rating";
import Comments from "../components/Comments/Comments";
import Dashboard from "../components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

const MenuRoutes = () => {
  return (
    <div className="menu-routes">
      <Menu />
      <div className="app-content">
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </div>
    </div>
  );
};

export default MenuRoutes;
