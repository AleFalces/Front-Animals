import React from "react";
import styles from "./SideNav.module.css";

// import Icon from "../Icons/Icon";

const SideNav = () => {
  // const menu = [
  //   "dashboard",
  //   "tasks",
  //   "grid",
  //   "list",
  //   "basket",
  //   "user",
  //   "stats",
  //   "cog"
  // ];

  return (
    <aside className={styles.sideNav}>
      {/* <div className={styles.img}></div>
      <div className={styles.panel}>
        {menu.map((icon, idx) => (
          <div className={styles.icon} key={idx}>
            <Icon icon={icon} />
          </div>
        ))}
      </div>
       <Icon icon="arrow" classes={styles.arrow}/>
       */}
    </aside>
  );
};

export default SideNav;
