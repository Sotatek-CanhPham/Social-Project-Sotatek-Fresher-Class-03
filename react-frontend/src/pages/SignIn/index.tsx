import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles["signin"]}>
      <div className={styles["signin__container"]}>
        <form onSubmit={formik.handleSubmit}>
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
                <input
                  type="text"
                  className={styles["input-email"]}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className={styles["error-message"]}>
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className={styles["signin__container__content__password"]}>
              <label className={styles["label"]}>Password</label>
              <div className={styles["input"]}>
                <input
                  type={passwordShown ? "text" : "password"}
                  className={styles["input-password"]}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? eye : eyeSlash}
                </i>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className={styles["error-message"]}>
                  {formik.errors.password}
                </div>
              )}
            </div>

            <button
              className={styles["signin__container__content__submit"]}
              type="submit"
            >
              Sign In
            </button>

            <div className={styles["link-element"]}> Forgot your password?</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
