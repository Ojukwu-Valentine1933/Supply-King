import Lottie from "lottie-react";
import smiler from "../../assets/smiler- 1725289338860.json";
import styles from "./CustomerDashboard.module.css";
import history from "../../assets/history- 1725300180101.json";
import discount from "../../assets/discount- 1725303211975.json"
import categories from "../../assets/category-animation - 1725317366321.json"
import pending from "../../assets/hourglass- 1725319522561.json"
const CustomerDashBoard = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className={`${styles.userGreeting} container`}>
          <div className="">
            <h1 className="text-white">Hi Josh</h1>
            <p className="text-white">Have you ordered today?</p>
          </div>
          <div>
            <Lottie
              animationData={smiler}
              loop={true}
              className={`${styles.smiler}`}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.shortcuts}`}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 col-sm-3 mb-3">
              <div className={`card ${styles.card}`}>
                <div className={`card-body ${styles.card_body}`}>
                <p>History</p>
                  <Lottie
                    animationData={history}
                    loop={true}
                    className={`${styles.history}`}
                  />
                  
                </div>
              </div>
            </div>
            <div className={`col-6 col-sm-3 mb-3`}>
              <div className={`card ${styles.card}`}>
                <div className={`card-body ${styles.card_body}`}>
                    <p> Discounts</p>
                    <Lottie
                        animationData={discount}
                        loop={true}
                        className={`${styles.discount}`}
                    />
                </div>
                
              </div>
            </div>
            <div className="col-6 col-sm-3 mb-3">
              <div className={`card ${styles.card}`}>
                <div className={`card-body ${styles.card_body}`}>
                    <p>Categories</p>
                    <Lottie
                        animationData={categories}
                        loop={true}
                        className={`${styles.categories}`}/>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3 mb-3">
              <div className={`card ${styles.card}`}>
                <div className={`card-body ${styles.card_body}`}>
                    <p>Pending</p>
                    <Lottie
                        animationData={pending}
                        loop={true}
                        className={`${styles.pending}`}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashBoard;
