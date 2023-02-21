import styles from "./UserNavbar.module.scss";

type Props = {
  onClose: () => void;
};

const UserNavbar = ({ onClose }: Props) => {
  const handldeSignOut = () => {
    localStorage.removeItem("token");
    onClose();
  };
  return (
    <div className={styles["user-navbar"]}>
      <div className={styles["btn-item"]}>Setting</div>
      <hr />
      <div className={styles["btn-item"]} onClick={handldeSignOut}>
        Sign Out
      </div>
    </div>
  );
};

export default UserNavbar;
