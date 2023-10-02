import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <main
      style={{
        width: "auto",
        minHeight: "100vh",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
