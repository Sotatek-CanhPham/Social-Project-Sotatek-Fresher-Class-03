import AvatarUser from "../../assets/images/header/avatar.png";
import FollowingIcon from "../../assets/images/user-info/following.svg";
import FollowsIcon from "../../assets/images/user-info/follows.svg";
import InstagramIcon from "../../assets/images/user-info/instagram.svg";
import LinkedInIcon from "../../assets/images/user-info/linkedin.svg";
import styles from "./UserInfo.module.scss";

type Props = {
  onEditClick: () => void;
  userInfo: any;
};

const UserInfo = ({ userInfo, onEditClick }: Props) => {
  return (
    <div className={styles["user-info"]}>
      <div className={styles["user-info__container"]}>
        <div className={styles["user-info__container__header"]}>
          <img src={AvatarUser} alt="" />
          <div>
            <p className={styles["username"]}>{userInfo.fullname}</p>
            <p className={styles["address"]}>{userInfo.location}</p>
          </div>
        </div>
        <hr />
        <div className={styles["user-info__container__body"]}>
          <div className={styles["follows"]}>
            <img src={FollowsIcon} alt="" />
            <p className={styles["number-of"]}>10K</p>
            <p className={styles["type"]}>Follows</p>
          </div>
          <div className={styles["following"]}>
            <img src={FollowingIcon} alt="" />
            <p className={styles["number-of"]}>600</p>
            <p className={styles["type"]}>Following</p>
          </div>
          <div className={styles["description"]}>
            <p>{userInfo.bio}</p>
          </div>
        </div>
        <hr />
        <div className={styles["user-info__container__user-pages"]}>
          <p className={styles["title"]}>MY PAGES</p>
          <div className={styles["list-pages"]}>
            <div className={styles["instagram"]}>
              <img src={InstagramIcon} alt="" />
              <p className={styles["user-id"]}>huyc_ain</p>
            </div>
            <div className={styles["linkedin"]}>
              <img src={LinkedInIcon} alt="" />
              <p className={styles["user-id"]}>huyc_ain</p>
            </div>
          </div>
        </div>

        <div
          className={styles["user-info__container__edit"]}
          onClick={onEditClick}
        >
          Edit
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
