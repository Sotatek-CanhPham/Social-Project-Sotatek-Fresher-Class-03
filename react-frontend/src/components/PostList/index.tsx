import Post from "./Post";
import styles from "./PostList.module.scss";

type Props = {
  postsList: any;
};

const PostList = ({ postsList }: Props) => {
  return (
    <div className={styles["post-list"]}>
      <div className={styles["post-list__container"]}>
        {Object.values(postsList).map((post: any) => {
          return (
            <>
              <Post content={post.content} />
              {post !== postsList[postsList.length - 1] && <hr />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
