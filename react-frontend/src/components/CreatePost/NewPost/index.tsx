import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faEarthAsia,
  faLock,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import ImageIcon from "../../../assets/images/create-post/image.svg";
import VideoIcon from "../../../assets/images/create-post/video.svg";
import CloseIcon from "../../../assets/images/edit-profile/close.svg";
import DownArrowIcon from "../../../assets/images/edit-profile/down-arrow.svg";
import AvatarUser from "../../../assets/images/header/avatar.png";
import styles from "./NewPost.module.scss";

type Props = {
  onClose: () => void;
  userInfo: any;
};

const NewPost = ({ onClose, userInfo }: Props) => {
  const [status, setStatus] = React.useState("Public");
  const [faIcon, setFaIcon] = React.useState<IconProp>(faEarthAsia);
  const [isShowDropdown, setIsShowDropdown] = React.useState(false);

  const show = (status: string, faIcon: IconProp) => () => {
    setStatus(status);
    setFaIcon(faIcon);
  };

  const showDropdown = (e: any) => {
    setIsShowDropdown(!isShowDropdown);
  };
  return (
    <div className={styles["new-post"]}>
      <div className={styles["new-post__container"]}>
        <h2>New Post</h2>
        <img
          alt=""
          src={CloseIcon}
          className={styles["close-btn"]}
          onClick={onClose}
        />
        <div className={styles["new-post__container__header"]}>
          <img alt="" src={AvatarUser} />
          <div className={styles["new-post__container__header__right"]}>
            <div className={styles["fullname"]}>{userInfo.fullname}</div>
            <div className={styles["post-status"]} onClick={showDropdown}>
              <FontAwesomeIcon icon={faIcon} className={styles["fa-icon"]} />
              <input
                type="text"
                className={classNames(
                  styles["post-status-input"],
                  "input-value"
                )}
                value={status || "Public"}
                readOnly
              />

              <img
                alt=""
                src={DownArrowIcon}
                className={styles["down-arrow"]}
              />
              {isShowDropdown && (
                <div className={styles["post-status-option"]}>
                  <div
                    className={styles["post-status-option-item"]}
                    onClick={show("Public", faEarthAsia)}
                  >
                    <FontAwesomeIcon icon={faEarthAsia} />
                    <p id="public">Public</p>
                  </div>
                  <hr />

                  <div
                    className={styles["post-status-option-item"]}
                    onClick={show("Friend", faUserGroup)}
                  >
                    <FontAwesomeIcon icon={faUserGroup} />
                    <p id="friend">Friend</p>
                  </div>

                  <hr />
                  <div
                    className={styles["post-status-option-item"]}
                    onClick={show("Only me", faLock)}
                  >
                    <FontAwesomeIcon icon={faLock} />
                    <p id="onlyme">Only me</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles["new-post__container__content"]}>
          <textarea
            placeholder="What's on your mind?"
            name="content"
          ></textarea>
        </div>
        <div className={styles["new-post__container__media-option"]}>
          <p>Add to your post</p>
          <ul>
            <li>
              <img src={ImageIcon} alt="" />
              <p>Image</p>
            </li>
            <li>
              <img src={VideoIcon} alt="" />
              <p>Video</p>
            </li>
          </ul>
        </div>
        <div className={styles["new-post__container__post-submit"]}>Post</div>
      </div>
    </div>
  );
};

export default NewPost;
