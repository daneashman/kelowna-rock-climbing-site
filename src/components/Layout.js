import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import "../style/bulma-style.sass";
// import "../style/custom-style.sass";
// import useSiteMetadata from "./SiteMetadata";

export default function TemplateWrapper({ children }) {
  // const { title, description } = useSiteMetadata();
  return (
    <>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  );
}
