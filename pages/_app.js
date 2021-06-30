import "../styles/globals.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import router from "next/dist/next-server/server/router";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
