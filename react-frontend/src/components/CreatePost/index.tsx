import AttachmentIcon from "../../assets/images/create-post/attachment.svg";
import EmojiIcon from "../../assets/images/create-post/emoji.svg";
import HashtagIcon from "../../assets/images/create-post/hashtag.svg";
import ImageIcon from "../../assets/images/create-post/image.svg";
import VideoIcon from "../../assets/images/create-post/video.svg";
import AvatarUser from "../../assets/images/header/avatar.png";
import styles from "./CreatePost.module.scss";

type Props = {
  onNewPostClick: () => void;
  userInfo: any;
};

const CreatePost = ({ onNewPostClick, userInfo }: Props) => {
  return (
    <div className={styles["create-post"]}>
      <div className={styles["create-post__container"]}>
        <div className={styles["create-post__container__post-writing"]}>
          <img src={AvatarUser} alt="" />
          <div className={styles["post-input"]} onClick={onNewPostClick}>
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
      </div>
    </div>
  );
};

export default CreatePost;
