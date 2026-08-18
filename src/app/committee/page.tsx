import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import CommitteeSection from "@/components/sections/CommitteeSection";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "E-Cell RBU Committee",
  description:
    "Meet the E-Cell RBU Committee - the student leaders driving entrepreneurship at Ramdeobaba University, Nagpur.",
  openGraph: {
    title: "E-Cell RBU Committee",
    description:
      "Meet the E-Cell RBU Committee - the student leaders driving entrepreneurship at Ramdeobaba University, Nagpur.",
    images: ["/og-image.jpg"],
  },
};

export default function CommitteePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <CommitteeSection />
      </main>
      <Footer />
    </>
  );
}