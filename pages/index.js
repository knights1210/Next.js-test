import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Head from "../component/Head";
import NavBar from "../component/NavBar";

export default function Home() {
  const title = "TEST!";
  return (
    <>
      <Head title={title} />
      <NavBar />
    </>
  );
}
