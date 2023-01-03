import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import LogoIcon from "../../assets/images/header/logo.svg";
import SearchIcon from "../../assets/images/header/search-icon.svg";
import HomepageIcon from "../../assets/images/header/header-homepage.svg";
import WatchIcon from "../../assets/images/header/header-watch.svg";
import MarketIcon from "../../assets/images/header/header-marketplace.svg";
import GroupsIcon from "../../assets/images/header/header-groups.svg";
import AvatarUser from "../../assets/images/header/avatar.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__container"]}>
        <div className={styles["navbar__container__logo"]}>
          <Link to={"/sign-in"}>
            <img src={LogoIcon} className={styles["logo"]} alt="" />
          </Link>
        </div>

        <div className={styles["navbar__container__search"]}>
          <img src={SearchIcon} alt="" />
          <input type="text" placeholder="Search" />
        </div>

        <div className={styles["navbar__container__navs"]}>
          <ul>
            <li>
              <img src={HomepageIcon} alt="" />
              <p>
                <Link to={"/"}>Home</Link>
              </p>
            </li>
            <li>
              <img src={WatchIcon} alt="" />
              <p>
                <Link to={"/sign-up"}>Watch</Link>
              </p>
            </li>
            <li>
              <img src={MarketIcon} alt="" />
              <p>
                <Link to={"/sign-in"}>Marketplace</Link>
              </p>
            </li>
            <li>
              <img src={GroupsIcon} alt="" />
              <p>
                <Link to={"/"}>Groups</Link>
              </p>
            </li>
          </ul>
        </div>

        <div className={styles["navbar__container__account"]}>
          <img src={AvatarUser} alt="" />
          <p>Pham Huy Canh</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
