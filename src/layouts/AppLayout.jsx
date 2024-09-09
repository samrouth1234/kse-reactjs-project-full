import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { Outlet, useNavigate } from "react-router-dom";

import Footer from "~components/footer/Footer";
import Navbar from "~components/navbar/Navbar";
import { TEMPLATE_PAGE } from "~constants/Routes";

export const AppLayout = () => {
  const auth = useAuth();
  const router = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      router(TEMPLATE_PAGE)
    }
  }, [auth]);

  return (
    <div className="flex min-h-screen flex-col position-relative ">
      <Navbar />
      <div className="relative flex flex-grow flex-col sm:bg-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
