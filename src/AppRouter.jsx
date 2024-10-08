import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import { ABOUT_US, HOME_PAGE, SERVICE } from "./constants/Routes";
import HomePage from "./page/home/HomePage";
import AboutUs from "./page/about-us/AboutUs";
import Service from "./page/service/Service";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE} element={<HomePage/>} />
      <Route path={ABOUT_US} element={<AboutUs/>} />
      <Route path={SERVICE} element={<Service/>} />
    </Routes>
  );
}
