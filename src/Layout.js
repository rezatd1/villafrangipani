import { useState } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

export default function Layout() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(false);
  return (
    <main
      onClick={() => setToggle(false)}
      style={{
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        position: toggle ? "fixed" : "static",
      }}
    >
      <Navbar />

      <Outlet />

      <Footer />
      <Login
        toggle={toggle}
        email={"something@email.com"}
        name={"Mr. Nobody"}
        handleToggle={handleToggle}
      />
    </main>
  );
}
