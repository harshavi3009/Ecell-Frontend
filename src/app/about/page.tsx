import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import AboutCardCascade from "@/components/sections/AboutCardCascade";
import WhoWeAre from "@/components/sections/WhoWeAre";
import EventsSection from "@/components/sections/EventsSection";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About E-Cell RBU",
  description:
    "Learn about E-Cell RBU, the entrepreneurship cell of Ramdeobaba University, Nagpur. Our mission, vision, and the four pillars that drive us.",
  openGraph: {
    title: "About E-Cell RBU",
    description:
      "Learn about E-Cell RBU, the entrepreneurship cell of Ramdeobaba University, Nagpur. Our mission, vision, and the four pillars that drive us.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <AboutCardCascade />
        <WhoWeAre />
        <EventsSection variant="about" />
      </main>
      <Footer />
    </>
  );
}