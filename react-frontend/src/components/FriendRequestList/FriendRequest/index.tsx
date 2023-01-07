import React from "react";
import styles from "./FriendRequest.module.scss";
import AvatarUser from "../../../assets/images/friend-request/avatar.svg";
import ConfirmIcon from "../../../assets/images/friend-request/confirm-friend-request.svg";
import DeleteIcon from "../../../assets/images/friend-request/delete-friend-request.svg";

type Props = {};

const FriendRequest = (props: Props) => {
  return (
    <div className={styles["friend-request"]}>
      <div className={styles["friend-request__left"]}>
        <img src={AvatarUser} alt="" className={styles["avatar"]} />
      </div>
      <div className={styles["friend-request__right"]}>
        <p className={styles["friend-request__right__username"]}>
          Nguyen Minh Anh
        </p>
        <div className={styles["friend-request__right__btn"]}>
          <img
            src={ConfirmIcon}
            alt=""
            className={styles["friend-request__right__confirm"]}
          />
          <img
            src={DeleteIcon}
            alt=""
            className={styles["friend-request__right__delete"]}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
