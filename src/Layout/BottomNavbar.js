import styles from "./Navbar.module.css"


const BottomNavbar = () => {
  return (
    <nav className={`navbar fixed-bottom ${styles.bottom_navbar} mt-5`}>
      <div className={`container-fluid`}>
      <button>
        <i class="bi bi-house-door-fill"></i>
        </button>
        <button>
        <i class="bi bi-clipboard-check"></i>
        </button>
       
       
       <button className={`${styles.plus}`}
        >
          
        <i class="bi bi-plus-square-fill"></i>
        </button>
       
       
        <button>
        <i class="bi bi-star-fill"></i>
        </button>
        <button onclick="this.classList.toggle('active')">
        <i class="bi bi-shop-window"></i>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavbar