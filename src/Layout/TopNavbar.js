
import styles from "./Navbar.module.css";
import coin from "../assets/coin.png"
import cart from "../assets/shopping-cart.png"

const TopNavbar = () => {
  return (
    <div className="navbar-wrapper">
    <nav className={`navbar navbar-expand-lg fixed-top  navbar-light ${styles.navbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="home">
          Vego Supply
        </a>
  
        <div className="d-flex ms-auto">
          <button className={`${styles.token_div}`}>
            <img src={coin} className={styles.token} alt=""/>
          </button>
          <button className={`${styles.cart_div} ms-3`}>
           <img src={cart} className={styles.cart} alt=""/>
          </button>
        </div>
      </div>
    </nav>
  </div>
  
  
  );
};

export default TopNavbar;
