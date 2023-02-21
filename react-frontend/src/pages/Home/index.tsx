import classNames from "classnames";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import CreatePost from "../../components/CreatePost";
import NewPost from "../../components/CreatePost/NewPost";
import EditProfile from "../../components/EditProfile";
import FriendBirthdayList from "../../components/FriendBirthdayList";
import FriendRequestList from "../../components/FriendRequestList";
import Navbar from "../../components/Navbar";
import PostList from "../../components/PostList";
import UserInfo from "../../components/UserInfo";
import UserNavbar from "../../components/UserNavbar";
import fetchPostData from "../../services/api/fetchPostData";
import fetchUserData from "../../services/api/fetchUserData";
import styles from "./HomePage.module.scss";

type Props = {};

const HomePage = (props: Props) => {
  const [isModalEditProfileOpen, setIsModalEditProfileOpen] = useState(false);
  const [isModalNewPostOpen, setIsModalNewPostOpen] = useState(false);
  const [isModalUserNavbarOpen, setIsModalUserNavbarOpen] = useState(false);

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

  const openModalUserNavbar = () => {
    setIsModalUserNavbarOpen(true);
  };

  const closeModalUserNavbar = () => {
    setIsModalUserNavbarOpen(false);
  };
  const [userInfo, setUserInfo] = useState({});
  const [postsList, setpostsList] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await fetchUserData.getCurrentUser();
        setUserInfo(data);
      } catch (error) {
        console.log("Error fetching user profile: ", error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchPostData.getPosts();
        setpostsList(data);
      } catch (error) {
        console.log("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  const updateUserInfo = (newUserInfo: any) => {
    setUserInfo(newUserInfo);
  };

  const accessToken = localStorage.getItem("token");

  return (
    <>
      {!accessToken ? (
        <Navigate to="/sign-in" />
      ) : (
        <div className={styles["home-page"]}>
          <div className={styles["home-page__navbar"]}>
            <Navbar
              userInfo={userInfo}
              onUserNavbarClick={openModalUserNavbar}
              onClose={closeModalUserNavbar}
            />
          </div>
          <div className={styles["home-page__content"]}>
            <div
              className={classNames(
                styles["home-page__content__left-content"],
                styles["scrollable-left"]
              )}
            >
              <div
                className={
                  styles["home-page__content__left-content__user-info"]
                }
              >
                <UserInfo
                  userInfo={userInfo}
                  onEditClick={openModalEditProfile}
                />
              </div>
            </div>
            <div
              className={classNames(
                styles["home-page__content__main-content"],
                styles["scrollable-main"]
              )}
            >
              <div
                className={
                  styles["home-page__content__main-content__create-post"]
                }
              >
                <CreatePost
                  onNewPostClick={openModalNewPost}
                  userInfo={userInfo}
                />
              </div>
              <div
                className={
                  styles["home-page__content__main-content__post-list"]
                }
              >
                <PostList postsList={postsList} />
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
                  styles[
                    "home-page__content__rigth-content__friend-request-list"
                  ]
                }
              >
                <FriendRequestList />
              </div>
              <div
                className={
                  styles[
                    "home-page__content__rigth-content__friend-birthday-list"
                  ]
                }
              >
                <FriendBirthdayList />
              </div>
            </div>

            {isModalEditProfileOpen && (
              <div>
                <EditProfile
                  onClose={closeModalEditProfile}
                  userInfo={userInfo}
                  updateUserInfo={updateUserInfo}
                />
              </div>
            )}

            {isModalNewPostOpen && (
              <div>
                <NewPost onClose={closeModalNewPost} userInfo={userInfo} />
              </div>
            )}

            {isModalUserNavbarOpen && (
              <div>
                <UserNavbar onClose={closeModalUserNavbar} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
