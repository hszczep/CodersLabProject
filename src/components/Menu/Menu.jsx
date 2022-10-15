import "./scss/Menu.css";
import { MenuItems } from "./Data/MenuItems";
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="menu-wrapper">
      <div className={openMenu ? "menu-container open" : "menu-container"}>
        <div
          className="open-menu-button"
          onClick={() => {
            setOpenMenu((cur) => !cur);
          }}
        >
          <MenuIcon fontSize="large" />
        </div>
        <div className="logo">
          <PhonelinkIcon />
          <h2>CodersLab</h2>
        </div>
        <nav className="items">
          {MenuItems &&
            MenuItems.length > 0 &&
            MenuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.location)}
                className={
                  item.location === location.pathname ? "item active" : "item"
                }
              >
                {item.icon}
                <h4>{item.name}</h4>
              </button>
            ))}
        </nav>
      </div>
    </div>
  );
}

export default Menu;
