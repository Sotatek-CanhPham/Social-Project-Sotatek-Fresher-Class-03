import React from "react";
import styles from "./FriendBirthday.module.scss";
import AvatarUser from "../../../assets/images/friend-birthday/avatar.svg";

type Props = {};

const FriendBirthday = (props: Props) => {
  return (
    <div className={styles["friend-birthday"]}>
      <div className={styles["friend-birthday__left"]}>
        <img src={AvatarUser} alt="" className={styles["avatar"]} />
      </div>
      <div className={styles["friend-birthday__right"]}>
        <p className={styles["friend-birthday__right__username"]}>
          Nguyen Quynh Anh
        </p>
        <p className={styles["friend-birthday__right__address"]}>Hanoi</p>
      </div>
    </div>
  );
};

export default FriendBirthday;
