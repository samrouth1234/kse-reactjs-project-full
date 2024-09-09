import { Outlet } from "react-router-dom";

import Footer from "~components/footer/Footer";
import Navbar from "~components/navbar/Navbar";

export const AppLayoutGlobal = () => {

  return (
    <div className="flex min-h-screen flex-col position-relative ">
      <Navbar />
      <div className="relative flex flex-grow flex-col bg-app-layout-global">
        <div className="container py-5" >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
