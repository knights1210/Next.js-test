import Head from "next/head";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import Body from "../component/Body";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
        <Head>
          <title>TOP Page</title>
        </Head>
        <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Header />
        <Body></Body>
      </motion.div>
    </>
  );
}
