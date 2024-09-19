import AppRoutes from "./AppRoute";
import TopNavbar from "./TopNavbar";
import { useLocation } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <header>
        {pathname === "/dashboard" || pathname.startsWith("/dashboard/") ? (
          <TopNavbar />
        ) : null}
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>
        {pathname === "/dashboard" || pathname.startsWith("/dashboard/") ? (
          <BottomNavbar />
        ) : null}
      </footer>
    </>
  );
};
export default Layout;
