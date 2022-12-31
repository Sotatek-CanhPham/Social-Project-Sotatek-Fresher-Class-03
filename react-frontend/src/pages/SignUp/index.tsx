import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.scss";


const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye}/>
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash}/>

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  }
  return (
    <div className={styles["signup"]}>
      <div className={styles["signup__container"]}>
        <div className={styles["signup__container__content"]}>
          <div className={styles["signup__container__content__header"]}>
            <h1>Sign Up</h1>
            <p style={{ color: "#4d4d4d" }}>
              Have an account?{" "}
              <Link to={"/sign-in"} className={styles["link-element"]}>
                Sign In
              </Link>
            </p>
          </div>
          <div className={styles["signup__container__content__email"]}>
            <label className={styles["label"]}>Email Address</label>
            <div className={styles["input"]}>

            <input type="text" className={styles["input-email"]} />
            </div>
            {/* <div className={styles["invalid-feedback"]}>Nhap sai email</div> */}
          </div>

          <div className={styles["signup__container__content__password"]}>
            <label className={styles["label"]}>Password</label>
            <div className={styles["input"]}>
              <input type={passwordShown ? "text" : "password"} className={styles["input-password"]} />
              <i onClick={togglePasswordVisiblity}>{passwordShown ? eye : eyeSlash}</i>
            </div>
            {/* <div className={styles["invalid-feedback"]}>Nhap sai email</div> */}
          </div>
          <div
            className={styles["signup__container__content__confirm-password"]}
          >
            <label className={styles["label"]}>Confirm Password</label>
            <div className={styles["input"]}>
              <input type={confirmPasswordShown ? "text" : "password"} className={styles["input-password"]} />
              <i onClick={toggleConfirmPasswordVisiblity}>{confirmPasswordShown ? eye : eyeSlash}</i>
            </div>
            {/* <div className={styles["invalid-feedback"]}>Nhap sai email</div> */}
          </div>

          <div className={styles["signup__container__content__checkbox"]}>
            <input type="checkbox" name="" style={{ margin: "0" }} /> I accept the {" "}
            <Link to={"/"} className={styles["link-element"]}>
              Terms & Conditions.
            </Link>
          </div>

          <div className={styles["signup__container__content__submit"]}>Sign Up</div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
