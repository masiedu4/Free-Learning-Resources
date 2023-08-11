import React from "react";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css"; // Import global styles

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <React.Fragment>
        <Component {...pageProps} />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <noscript>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default MyApp;
