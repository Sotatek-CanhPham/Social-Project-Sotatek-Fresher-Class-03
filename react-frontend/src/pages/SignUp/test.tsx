import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // handle submit logic here
    },
  });

  return (
    <div className={styles["signup"]}>
      <div className={styles["signup__container"]}>
        <form onSubmit={formik.handleSubmit}>
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
              <label className={styles["label"]}>Fullname</label>
              <div className={styles["input"]}>
                <input
                  type="text"
                  name="fullname"
                  className={styles["input-email"]}
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                />
                {formik.touched.fullname && formik.errors.fullname && (
                  <div className={styles["error-message"]}>
                    {formik.errors.fullname}
                  </div>
                )}
              </div>
            </div>
            <div className={styles["signup__container__content__email"]}>
              <label className={styles["label"]}>Email Address</label>
              <div className={styles["input"]}>
                <input
                  type="text"
                  name="email"
                  className={styles["input-email"]}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className={styles["error-message"]}>
                    {formik.errors.email}
                  </div>
                )}
              </div>
            </div>
            <div className={styles["signup__container__content__password"]}>
              <label className={styles["label"]}>Password</label>
              <div className={styles["input"]}>
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  className={styles["input-password"]}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <span
                  onClick={togglePasswordVisiblity}
                  className={styles["toggle-password"]}
                >
                  {passwordShown ? eye : eyeSlash}
                </span>
                {formik.touched.password && formik.errors.password && (
                  <div className={styles["error-message"]}>
                    {formik.errors.password}
                  </div>
                )}
              </div>
            </div>
            <div
              className={styles["signup__container__content__confirm-password"]}
            >
              <label className={styles["label"]}>Confirm Password</label>
              <div className={styles["input"]}>
                <input
                  type={confirmPasswordShown ? "text" : "password"}
                  name="confirmPassword"
                  className={styles["input-password"]}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                <span
                  onClick={toggleConfirmPasswordVisiblity}
                  className={styles["toggle-password"]}
                >
                  {confirmPasswordShown ? eye : eyeSlash}
                </span>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className={styles["error-message"]}>
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
            </div>
            <div
              className={styles["signup__container__content__submit-button"]}
            >
              <button className={styles["submit-button"]} type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
