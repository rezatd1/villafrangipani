import React from "react";
import logo from "../../assets/img/full-logo-footer.png";
import footerResourses from "../../resources/FooterResources";
import "./Footer.scss";
import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";
import CopyRight from "../copyright/CopyRight";

export default function Footer() {
  return (
    <div className="d-flex w-100 light-gray-bg py-5 justify-content-around flex-wrap">
      <LeftFooter />
      <MiddleFooter />
      <RightFooter />
      <CopyRight />
    </div>
  );
}
