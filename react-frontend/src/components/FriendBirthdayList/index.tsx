import React from "react";
import FriendBirthday from "./FriendBirthday";
import styles from "./FriendBirthdayList.module.scss";
import FriendBirthdayIcon from "../../assets/images/friend-birthday/friend-birthday.svg";

type Props = {};

const FriendBirthdayList = (props: Props) => {
  return (
    <div className={styles["friend-birthday-list"]}>
      <div className={styles["friend-birthday-list__container"]}>
        <div className={styles["header"]}>
          <img src={FriendBirthdayIcon} alt="" />
          <p>BIRTHDAY</p>
        </div>
        <hr />
        <div className={styles["content"]}>
          <div className={styles["friend-birthday-item"]}>
            <FriendBirthday />
          </div>
          <div className={styles["friend-birthday-item"]}>
            <FriendBirthday />
          </div>
          <div className={styles["friend-birthday-item"]}>
            <FriendBirthday />
          </div>
        </div>
        <div className={styles["footer"]}>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
};

export default FriendBirthdayList;
