import Head from "next/head";
import dynamic from "next/dynamic";
import { Element as ScrollSection } from "react-scroll";

import HeaderSection from "@/components/sections/HeaderSection";
import Navbar from "@/components/ui/Navbar";
import ChevronNav from "@/components/ui/ChevronNav";
import Footer from "@/components/ui/Footer";


const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  { ssr: false }
);
const ProjectSection = dynamic(
  () => import("@/components/sections/ProjectSection"),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariano Chavez</title>
      </Head>

      <Navbar />

      <ScrollSection name="intro">
          <HeaderSection />
      </ScrollSection>

      <ScrollSection name="about">
        <AboutSection />
        <ChevronNav toElement="projects" />
      </ScrollSection>

      <ScrollSection name="projects">
        <ProjectSection />
        <ChevronNav toElement="contact" />
      </ScrollSection>

      <ScrollSection name="contact">
        <ContactSection />
      </ScrollSection>

      <Footer />
    </>
  );
}
