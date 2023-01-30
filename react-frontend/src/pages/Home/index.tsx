import classNames from "classnames";
import { useState } from "react";
import CreatePost from "../../components/CreatePost";
import NewPost from "../../components/CreatePost/NewPost";
import FriendBirthdayList from "../../components/FriendBirthdayList";
import FriendRequestList from "../../components/FriendRequestList";
import Navbar from "../../components/Navbar";
import PostList from "../../components/PostList";
import UserInfo from "../../components/UserInfo";
import EditProfile from "../../components/UserInfo/EditProfile";
import styles from "./HomePage.module.scss";

type Props = {};

const HomePage = (props: Props) => {
  const [isModalEditProfileOpen, setIsModalEditProfileOpen] = useState(false);
  const [isModalNewPostOpen, setIsModalNewPostOpen] = useState(false);

  const openModalEditProfile = () => {
    setIsModalEditProfileOpen(true);
  };

  const closeModalEditProfile = () => {
    setIsModalEditProfileOpen(false);
  };

  const openModalNewPost = () => {
    setIsModalNewPostOpen(true);
  };

  const closeModalNewPost = () => {
    setIsModalNewPostOpen(false);
  };

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
            <UserInfo onEditClick={openModalEditProfile} />
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
            <CreatePost onNewPostClick={openModalNewPost} />
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

        {isModalEditProfileOpen && (
          <div>
            <EditProfile onClose={closeModalEditProfile} />
          </div>
        )}

        {isModalNewPostOpen && (
          <div>
            <NewPost onClose={closeModalNewPost} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
