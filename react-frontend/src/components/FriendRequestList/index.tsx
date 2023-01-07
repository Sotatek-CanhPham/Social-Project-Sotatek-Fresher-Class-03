import React from "react";
import FriendRequest from "./FriendRequest";
import styles from "./FriendRequestList.module.scss";
import FriendRequestIcon from "../../assets/images/friend-request/friend-request.svg";

type Props = {};

const FriendRequestList = (props: Props) => {
  return (
    <div className={styles["friend-request-list"]}>
      <div className={styles["friend-request-list__container"]}>
        <div className={styles["header"]}>
          <img src={FriendRequestIcon} alt="" />
          <p>FRIEND REQUEST</p>
        </div>
        <hr />
        <div className={styles["content"]}>
          <div className={styles["friend-request-item"]}>
            <FriendRequest />
          </div>
          <div className={styles["friend-request-item"]}>
            <FriendRequest />
          </div>
          <div className={styles["friend-request-item"]}>
            <FriendRequest />
          </div>
        </div>
        <div className={styles["footer"]}>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestList;
