import Post from "./Post";
import styles from "./PostList.module.scss";

type Props = {};

const PostList = (props: Props) => {
  return (
    <div className={styles["post-list"]}>
      <div className={styles["post-list__container"]}>
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
        <hr />
        <Post />
      </div>
    </div>
  );
};

export default PostList;
