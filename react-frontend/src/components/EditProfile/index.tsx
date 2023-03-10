import { useFormik } from "formik";
import React from "react";
import AddIcon from "../../assets/images/edit-profile/add.svg";
import CameraIcon from "../../assets/images/edit-profile/camera.svg";
import CloseIcon from "../../assets/images/edit-profile/close.svg";
import DownArrowIcon from "../../assets/images/edit-profile/down-arrow.svg";
import EditIcon from "../../assets/images/edit-profile/edit.svg";
import AvatarUser from "../../assets/images/header/avatar.png";
import InstagramIcon from "../../assets/images/user-info/instagram.svg";
import LinkedInIcon from "../../assets/images/user-info/linkedin.svg";
import styles from "./EditProfile.module.scss";
import fetchUserData from "../../services/api/fetchUserData";

type Props = {
  onClose: () => void;
  userInfo: any;
  updateUserInfo: (data: any) => void;
};

const EditProfile = ({ onClose, userInfo, updateUserInfo }: Props) => {
  const [editing, setEditing] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [pageName, setPageName] = React.useState("");

  const [fullname, setFullname] = React.useState(userInfo.fullname);
  const [location, setLocation] = React.useState(userInfo.location);
  const [bio, setBio] = React.useState(userInfo.bio);

  const [isShowDropdown, setIsShowDropdown] = React.useState(false);

  const showDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const show = (pageName: string) => () => {
    setPageName(pageName);
    setIsShowDropdown(false);
  };

  const handleCancelClick = () => {};

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "fullname") {
      setFullname(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "bio") {
      setBio(value);
    }
  };

  const handleClickEdit = (e: any) => {
    setEditing(true);
    const parentElement = e.target.offsetParent;
    const pElement = parentElement.querySelector("p");
    const inputElement = document.createElement("input");
    inputElement.value = pElement.innerText;
    parentElement.replaceChild(inputElement, pElement);
    inputElement.classList.add("input-value");
    inputElement.onchange = handleOnChange;
    inputElement.name = pElement.id;
    inputElement.focus();

    const editIcon = e.target;
    parentElement.removeChild(editIcon);
  };

  const handleSaveClick = async () => {
    const data = { fullname, location, bio };

    try {
      const response = await fetchUserData.updateUserProfile(data);
      updateUserInfo(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickAddPage = (e: any) => {
    setEditing(true);
    setAdding(true);
  };

  return (
    <div className={styles["edit-profile"]}>
      <div className={styles["edit-profile__container"]}>
        <h2>Edit Profile</h2>
        <img
          alt=""
          src={CloseIcon}
          className={styles["close-btn"]}
          onClick={onClose}
        />

        <div className={styles["edit-profile__container__fullname"]}>
          <div className={styles["avatar"]}>
            <img alt="" src={AvatarUser} />
            <img alt="" src={CameraIcon} className={styles["camera-icon"]} />
          </div>
          <p id="fullname">{userInfo.fullname}</p>
          <img
            alt=""
            src={EditIcon}
            className={styles["edit-icon"]}
            onClick={handleClickEdit}
          />
        </div>

        <div className={styles["edit-profile__container__location"]}>
          <span>Location</span>
          <p id="location">{userInfo.location}</p>
          <img
            alt=""
            src={EditIcon}
            className={styles["edit-icon"]}
            onClick={handleClickEdit}
          />
        </div>

        <hr />

        <div className={styles["edit-profile__container__bio"]}>
          <span>Bio</span>
          <p id="bio">{userInfo.bio}</p>
          <img
            alt=""
            src={EditIcon}
            className={styles["edit-icon"]}
            onClick={handleClickEdit}
          />
        </div>

        <hr />

        <div className={styles["edit-profile__container__my-pages"]}>
          <span>My Pages</span>
          <div className={styles["list-pages"]}>
            <div className={styles["item-page"]}>
              <img alt="" src={InstagramIcon} />
              <p>huyc_ain</p>
              <img
                alt=""
                src={EditIcon}
                className={styles["edit-icon"]}
                onClick={handleClickEdit}
              />
            </div>
            <div className={styles["item-page"]}>
              <img alt="" src={LinkedInIcon} />
              <p>huyc_ain</p>
              <img
                alt=""
                src={EditIcon}
                className={styles["edit-icon"]}
                onClick={handleClickEdit}
              />
            </div>
          </div>

          {!adding && (
            <div
              className={styles["add-page-btn"]}
              onClick={handleClickAddPage}
            >
              <img alt="" src={AddIcon} />
              <p>Add a website</p>
            </div>
          )}

          {adding && (
            <div className={styles["add-page"]}>
              <input type="text" placeholder="Enter username" />
              <div className={styles["page-option"]} onClick={showDropdown}>
                <input
                  type="text"
                  placeholder="Choose"
                  readOnly
                  className={styles["page-option-input"]}
                  value={pageName}
                />
                <img
                  alt=""
                  src={DownArrowIcon}
                  className={styles["page-option-down-arrow"]}
                />

                {isShowDropdown && (
                  <div className={styles["page-option-list"]}>
                    <div
                      className={styles["page-option-list__item"]}
                      onClick={show("Instagram")}
                    >
                      <p>Instagram</p>
                    </div>
                    <hr />
                    <div
                      className={styles["page-option-list__item"]}
                      onClick={show("LinkedIn")}
                    >
                      <p>LinkedIn</p>
                    </div>

                    <hr />

                    <div
                      className={styles["page-option-list__item"]}
                      onClick={show("")}
                    >
                      <p>Choose</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {editing && (
          <div className={styles["submit"]}>
            <button
              className={styles["btn-cancel"]}
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles["btn-save"]}
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
