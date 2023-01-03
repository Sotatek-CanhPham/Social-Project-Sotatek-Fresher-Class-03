import classNames from "classnames";
import CreatePost from "../../components/CreatePost";
import FriendBirthdayList from "../../components/FriendBirthdayList";
import FriendRequestList from "../../components/FriendRequestList";
import Navbar from "../../components/Navbar";
import PostList from "../../components/PostList";
import UserInfo from "../../components/UserInfo";
import styles from "./HomePage.module.scss";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles["home-page"]}>
      <div className={styles["home-page__navbar"]}>
        <Navbar />
      </div>
      <div className={styles["home-page__content"]}>
        <div
          className={classNames(
            styles["home-page__content__left-content"],
            styles["scrollable-left"]
          )}
        >
          <div
            className={styles["home-page__content__left-content__user-info"]}
          >
            <UserInfo />
          </div>
        </div>
        <div
          className={classNames(
            styles["home-page__content__main-content"],
            styles["scrollable-main"]
          )}
        >
          <div
            className={styles["home-page__content__main-content__create-post"]}
          >
            <CreatePost />
          </div>
          <div
            className={styles["home-page__content__main-content__post-list"]}
          >
            <PostList />
          </div>
        </div>
        <div
          className={classNames(
            styles["home-page__content__rigth-content"],
            styles["scrollable-right"]
          )}
        >
          <div
            className={
              styles["home-page__content__rigth-content__friend-request-list"]
            }
          >
            <FriendRequestList />
          </div>
          <div
            className={
              styles["home-page__content__rigth-content__friend-birthday-list"]
            }
          >
            <FriendBirthdayList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
