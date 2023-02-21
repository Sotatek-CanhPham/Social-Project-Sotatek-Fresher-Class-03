import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axiosClient from "../../services/api/axios";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
  const navigate = useNavigate();

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
    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSignUp();
    },
  });

  const handleSignUp = async () => {
    const { fullname, email, password } = formik.values;
    const data = {
      fullname,
      email,
      password,
    };

    try {
      const response = await axiosClient.post("/auth/sign-up", data);
      localStorage.setItem("token", response.data.accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const accessToken = localStorage.getItem("token");

  return (
    <>
      {accessToken ? (
        <Navigate to="/" />
      ) : (
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
                <div className={styles["signup__container__content__fullname"]}>
                  <label className={styles["label"]}>Fullname</label>
                  <div className={styles["input"]}>
                    <input
                      type="text"
                      className={styles["input-fullname"]}
                      name="fullname"
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.fullname && formik.errors.fullname && (
                    <div className={styles["error-message"]}>
                      {formik.errors.fullname}
                    </div>
                  )}
                </div>
                <div className={styles["signup__container__content__email"]}>
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

                <div className={styles["signup__container__content__password"]}>
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
                <div
                  className={
                    styles["signup__container__content__confirm-password"]
                  }
                >
                  <label className={styles["label"]}>Confirm Password</label>
                  <div className={styles["input"]}>
                    <input
                      type={confirmPasswordShown ? "text" : "password"}
                      className={styles["input-password"]}
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                    <i onClick={toggleConfirmPasswordVisiblity}>
                      {confirmPasswordShown ? eye : eyeSlash}
                    </i>
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className={styles["error-message"]}>
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>

                <div className={styles["signup__container__content__checkbox"]}>
                  <input
                    type="checkbox"
                    style={{ margin: "0" }}
                    name="terms"
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                  />{" "}
                  I accept the{" "}
                  <Link to={"#"} className={styles["link-element"]}>
                    Terms & Conditions.
                  </Link>
                  {formik.touched.terms && formik.errors.terms && (
                    <div className={styles["error-message"]}>
                      {formik.errors.terms}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    className={styles["signup__container__content__submit"]}
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
