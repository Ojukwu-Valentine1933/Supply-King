import styles from "./LoginSuccess.module.css"

import Lottie from "lottie-react";
import good from "../../assets/ok - 1726781806562.json"
import { Link } from "react-router-dom";

const SignupSuccess = () => {
    return(
        <div className={` form control ${styles.modal_container}`}>
        <div className={` ${styles.modal} `}>
          <Lottie animationData={good} loop={false} className={`${styles.good}`}/>
          <h1 className="text-center">Signup Successful</h1>
          <p className="text-center">
            You have successfully created your account!</p>
            <Link className={`text-center form-control ${styles.gotologin}`} to={"/auth/login"}>
            Go to Login
            </Link>
        </div>
      </div>
    )
}
export default SignupSuccess