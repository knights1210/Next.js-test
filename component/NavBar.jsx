import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const NavBar = () => {
  return (
    <>
      <nav className={styles.bg}>
        <div className={`${styles.container} ${styles.flex}`}>
          <h2 className={styles.title}>Hello, Next.js!!</h2>
          <ul className={styles.flex}>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a className={styles.hover}>HOME</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/copy">
                <a className={styles.hover}>INFO</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="#">
                <a className={styles.hover}>CONTACT</a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
