"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function FrontendLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
