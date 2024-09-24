import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <nav className={`navbar fixed-bottom ${styles.bottom_navbar} mt-5`}>
      <div className={`container-fluid`}>
        <Link to={"/dashboard"}>
          <i className={`bi bi-house-door-fill ${styles.i}`}></i>
        </Link>

        <Link>
          <i className={`bi bi-clipboard-check ${styles.i}`} ></i>
        </Link>

        <Link to="/dashboard/order" className={``}>
          <i className={`bi bi-plus-square-fill ${styles.i}`}></i>
        </Link>
        <Link>
          <i className={`bi bi-star-fill ${styles.i}`}></i>
        </Link>

        <Link>
          <i className={`bi bi-shop-window ${styles.i}`}></i>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavbar;
