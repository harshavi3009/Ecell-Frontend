import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import AboutCardCascade from "@/components/sections/AboutCardCascade";
import WhoWeAre from "@/components/sections/WhoWeAre";
import EventsSection from "@/components/sections/EventsSection";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "E-Cell RBU | Entrepreneurship & Innovation",
  description:
    "E-Cell RBU is the entrepreneurship cell of Ramdeobaba University, Nagpur. Building founders, funding startups, and driving innovation since 2018.",
  openGraph: {
    title: "E-Cell RBU | Entrepreneurship & Innovation",
    description:
      "E-Cell RBU is the entrepreneurship cell of Ramdeobaba University, Nagpur. Building founders, funding startups, and driving innovation since 2018.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <AboutCardCascade />
        <WhoWeAre />
        <EventsSection variant="home" limit={4} />
      </main>
      <Footer />
    </>
  );
}