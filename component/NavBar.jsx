import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <nav className={styles.bg}>
        <div className={`${styles.container} ${styles.flex}`}>
          <h2>Hello, Next.js!!</h2>
          <ul className={styles.flex}>
            <li><a href="#">HOME</a></li>
            <li><a href="#">INFO</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
