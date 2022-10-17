import { AppProps } from "next/app"
import "../styles/index.scss";
import "../styles/vendors/open-props-normalize.css";
import "open-props/style";

//uncomment whenever client wants light or dark mode feature or whenever prefers color scheme gets a js api toggle 👀
//import "open-props/normalize";


// import { useApp } from "../lib/gateway"
// import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   (async () => useApp().load())()
  // }, [])
  return <Component {...pageProps} />
}
