import "@/styles/globals.css";
import { theme } from "@/SDK/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default function App({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (!isLoggedIn && router.pathname !== "/login") {
  //     router.push("/login");
  //   }
  // }, [router.pathname]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  );
}
