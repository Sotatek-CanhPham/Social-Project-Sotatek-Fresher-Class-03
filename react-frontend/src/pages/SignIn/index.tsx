import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye}/>
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash}/>
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };



  return (
    <div className={styles["signin"]}>
      <div className={styles["signin__container"]}>
        <div className={styles["signin__container__content"]}>
          <div className={styles["signin__container__content__header"]}>
            <h1>Sign In</h1>
            <p style={{ color: "#4d4d4d" }}>
              Don't have an account?{" "}
              <Link to={"/sign-up"} className={styles["link-element"]}>
                Sign Up
              </Link>
            </p>
          </div>

          <div className={styles["signin__container__content__email"]}>
            <label className={styles["label"]}>Email Address</label>
            <div className={styles["input"]}>

            <input type="text" className={styles["input-email"]} />
            </div>
            {/* <div className="invalid-feedback">Nhap sai email</div> */}
          </div>

          <div className={styles["signin__container__content__password"]}>
            <label className={styles["label"]}>Password</label>
            <div className={styles["input"]}>
            <input type={passwordShown ? "text" : "password"} className={styles["input-password"]} /> 
            <i onClick={togglePasswordVisiblity}>{passwordShown ? eye : eyeSlash}</i>

            </div>
            {/* <div className="invalid-feedback">Nhap sai password</div> */}
          </div>

          <div className={styles["signin__container__content__submit"]}>Sign In</div>

          <div className={styles["link-element"]}> Forgot your password?</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
