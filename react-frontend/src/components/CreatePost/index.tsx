import React from "react";
import styles from "./CreatePost.module.scss";
import AvatarUser from "../../assets/images/header/avatar.png";
import ImageIcon from "../../assets/images/create-post/image.svg";
import VideoIcon from "../../assets/images/create-post/video.svg";
import AttachmentIcon from "../../assets/images/create-post/attachment.svg";
import HashtagIcon from "../../assets/images/create-post/hashtag.svg";
import EmojiIcon from "../../assets/images/create-post/emoji.svg";
import NewPost from "./NewPost";

type Props = {};

const CreatePost = (props: Props) => {
  const handleClickInput = () => {
    const newPost = document.querySelector(
      `.${styles["create-post__container__new-post"]}`
    );
    newPost?.classList.toggle(styles["show-new-post"]);
  };

  return (
    <div className={styles["create-post"]}>
      <div className={styles["create-post__container"]}>
        <div className={styles["create-post__container__post-writing"]}>
          <img src={AvatarUser} alt="" />
          <div className={styles["post-input"]} onClick={handleClickInput}>
            <p>Share something...</p>
            <img src={EmojiIcon} alt="" />
          </div>
        </div>
        <hr />
        <div className={styles["create-post__container__options"]}>
          <ul>
            <li>
              <img src={ImageIcon} alt="" />
              <p>Image</p>
            </li>
            <li>
              <img src={VideoIcon} alt="" />
              <p>Video</p>
            </li>
            <li>
              <img src={AttachmentIcon} alt="" />
              <p>Attachment</p>
            </li>
            <li>
              <img src={HashtagIcon} alt="" />
              <p>Hashtag</p>
            </li>
          </ul>
        </div>
        <div className={styles["create-post__container__new-post"]}>
          <NewPost />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
