import Styles from "../styles/Header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className={Styles.big_bg}>
        <Image
          src="/4946482_m.jpg"
          alt=""
          width={1920}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
        <div className={Styles.container}>
          <h1 className={Styles.title}>Hello, Next.js!!</h1>
          <p>Next.js Sample Site</p>
        </div>
      </div>
    </>
  );
};

export default Header;
