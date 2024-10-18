import styles from "./CategoryCarousel.module.css";
import nikeOne from "../assets/NIKE+AIR+MAX+95.jfif"
import nikeTwo from "../assets/NIKE+AIR+MAX+97.jfif"
import nikeThree from "../assets/NIKE+AIR+MAX+96.png"
import nikeFour from "../assets/nike-four.png"
import nikeFive from "../assets/nike-five.png"
import nikeSix from "../assets/nike-six.jpg"
import capOne from "../assets/capOne - Copy.png"
import capTwo from "../assets/cap-two.png"
import capThree from "../assets/cap-three - Copy.png"
import trouserOne from "../assets/trouser-one.png"
import trouserTwo from "../assets/trouser-two.png"
import trouserThree from "../assets/trouser-three.png"
const MarketCarousel = () => {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-2">
        {/* First Card */}
        <div className="col-6 mb-4">
          <div className={`card ${styles.card}`} style={{ width: "100%" }}>
            <div className="card-body p-0">
              <div
                id="carouselExampleAutoplaying1"
                className={`carousel slide`}
                data-bs-ride="carousel"
              >
                <div className={`carousel-inner ${styles.carousel}`}>
                  <div className="carousel-item active">
                    <img src={nikeOne} className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={nikeTwo} className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={nikeThree} className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying1"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying1"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="container mt-2">
              <h6 className="card-title">Nike Invicible 3</h6>
              <p className="card-title">NGN: 450,000</p>
              </div>
             
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-6 mb-4">
          <div className={`card ${styles.card}`} style={{ width: "100%" }}>
            <div className="card-body p-0">
              <div
                id="carouselExampleAutoplaying2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className={`carousel-inner ${styles.carousel}`}>
                  <div className="carousel-item active">
                    <img src={nikeFour} className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={nikeFive} className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={nikeSix} className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="container mt-2">
              <h6 className="card-title">Nike Invicible 5</h6>
              <p className="card-title">NGN: 480,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-6 mb-4">
          <div className={`card ${styles.card}`} style={{ width: "100%" }}>
            <div className="card-body p-0">
              <div
                id="carouselExampleAutoplaying3"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className={`carousel-inner ${styles.carousel}`}>
                  <div className="carousel-item active">
                    <img src={capOne} className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={capTwo} className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={capThree} className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying3"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying3"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="container mt-2">
              <h6 className="card-title">Jordan Peak</h6>
              <p className="card-title">NGN: 80,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="col-6 mb-4">
          <div className={`card ${styles.card}`} style={{ width: "100%" }}>
            <div className="card-body p-0">
              <div
                id="carouselExampleAutoplaying4"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className={`carousel-inner ${styles.carousel}`}>
                  <div className="carousel-item active">
                    <img src={trouserOne} className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={trouserTwo} className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={trouserThree} className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying4"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying4"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="container mt-2">
              <h6 className="card-title">Nike Yogania</h6>
              <p className="card-title">NGN: 23,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCarousel;
