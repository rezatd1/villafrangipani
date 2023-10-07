

import CopyRight from "../../components/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import MetaTag from "../../components/metaTag/MetaTag";
import Navbar from "../../components/navbar/Navbar";
import ContactSection from "./ContactSection";
import "./contact.scss";

export default function Contact() {

  return (
    <div className="bg-light-golden">
      <MetaTag PageTitle='Contact' metaDescription='Villa Frangipani Contact' />
      <Navbar />
      <ContactSection />
      <Footer />
      <CopyRight />
    </div>
  );
}
