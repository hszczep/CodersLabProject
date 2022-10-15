import MapIcon from "@mui/icons-material/Map";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GradeIcon from '@mui/icons-material/Grade';
import CommentIcon from '@mui/icons-material/Comment';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
export const MenuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    location: "/user/dashboard",
  },
  {
    name: "Rating",
    icon: <GradeIcon />,
    location: "/user/rating",
  },
  {
    name: "Map",
    icon: <MapIcon />,
    location: "/user/map",
  },
  {
    name: "Comments",
    icon: <CommentIcon />,
    location: "/user/comments",
  },
  {
    name: "Form",
    icon: <DynamicFormIcon />,
    location: "/user/form",
  },
];
