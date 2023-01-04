import React from "react";
import styles from "./Post.module.scss";
import AvatarUser from "../../../assets/images/header/avatar.png";
import OptionIcon from "../../../assets/images/post-list/option.svg";
import PostImage from "../../../assets/images/post-list/post-image.svg";
import LikeIcon from "../../../assets/images/post-list/like-post.svg";
import CommentIcon from "../../../assets/images/post-list/comment-post.svg";
import UnLikeIcon from "../../../assets/images/post-list/unlike-post.svg";

type Props = {};

const Post = (props: Props) => {
  return (
    <div className={styles["post"]}>
      <div className={styles["post__header"]}>
        <div className={styles["post-info"]}>
          <div className={styles["post-info__left"]}>
            <img
              src={AvatarUser}
              alt=""
              className={styles["post-creator-avatar"]}
            />
          </div>
          <div className={styles["post-info__right"]}>
            <p className={styles["post-creator-name"]}>Pham Huy Canh</p>
            <p className={styles["post-creation-time"]}>2 hours ago</p>
          </div>
        </div>
        <div className={styles["post-options"]}>
          <img src={OptionIcon} alt="" />
        </div>
      </div>
      <div className={styles["post__content"]}>
        <div className={styles["post-caption"]}>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and.
          </p>
        </div>
        <div className={styles["post-images"]}>
          <img src={PostImage} alt="" />
        </div>
      </div>
      <div className={styles["post__footer"]}>
        <div className={styles["post-likes"]}>
          <img src={LikeIcon} alt="" />
          <p>14</p>
        </div>
        <div className={styles["post-comments"]}>
          <img src={CommentIcon} alt="" />
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
