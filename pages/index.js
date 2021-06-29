import Image from "next/image";
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
