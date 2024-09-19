import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../App.css";
import order from "../../assets/order - 1724883846195.json";
import Lottie from "lottie-react";
import securePayment from "../../assets/secure-payment - 1724883196067.json";
import customerCare from "../../assets/delivery - 1724884064429.json";
import { Link } from "react-router-dom";



const WelcomeComponent = () => {

 
  return (
    <main className="container">
      <h1 className="skip">SUPPLY MASTER</h1>
      <div className="swiper-container container">
        <Swiper
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={0}
          centeredSlides={false}
          slidesPerView={1}
          spaceBetween={30}
          speed={800}
          slideToClickedSlide={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
            1440: { slidesPerView: 4, spaceBetween: 50 },
          }}
        >
          <SwiperSlide className={`swiper-slide slide-1`}>
            <div>
              <Lottie
                loop={true}
                animationData={order}
                className="lottie-animations"
              />
              <h1 className="slide-headers">Easy Ordering</h1>
              <p className="slider-paragraphs">
                Ordering is simple and quick. Our intuitive platform guides you
                seamlessly from browsing to checkout, making your shopping
                experience hassle-free.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`swiper-slide slide-1`}>
            <div>
              <Lottie
                loop={true}
                animationData={securePayment}
                className="lottie-animations"
              />
              <h1 className="slide-headers">Secure Payment</h1>
              <p className="slider-paragraphs">
                Your safety is our priority. We use advanced encryption and
                secure payment methods to protect your financial information,
                ensuring every transaction is safe and confidential.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`swiper-slide slide-1`}>
            <div>
              <Lottie
                loop={true}
                animationData={customerCare}
                className="lottie-animations"
              />
              <h1 className="slide-headers">Fast Delivery</h1>
              <p className="slider-paragraphs">
                Get your orders delivered swiftly. With reliable logistics and
                real-time tracking, we ensure your items arrive promptly, just
                when you need them.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`swiper-slide slide-1`}>
            <div>
              <h1 className="signup-header">Get Started</h1>
              <div
                className="card signup-form"
                style={{ width: "100%", height: "30rem" }}
              >
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="firstNameHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputLastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputLastName"
                        aria-describedby="lastNameHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputConfirmPassword">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputConfirmPassword"
                      />
                    </div>
                    <div className="form-group">
                      <Link to={"signupsuccess"}>
                        <button
                          type="submit"
                          className="btn btn-primary form-control"
                          style={{ marginTop: "40px" }}
                        >
                          Sign Up
                        </button>
                      </Link>
                    </div>
                    <p className="have-account">
                      Already have an account?{" "}
                      <Link to={"/auth/signin"} style={{ color: "#B22222" }}>
                        Sign In
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className={`swiper-pagination`}></div>
        </Swiper>
      </div>
    </main>
  );
};

export default WelcomeComponent;
