import Head from "next/head";
import dynamic from "next/dynamic";

import HeaderSection from "@/components/sections/HeaderSection";

const Navbar = dynamic(() => import("@/components/ui/Navbar"), { ssr: false });
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
const Footer = dynamic(() => import("@/components/ui/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariano Chavez</title>
      </Head>

      <Navbar />

      <HeaderSection />

      <AboutSection />

      <ProjectSection />

      <ContactSection />

      <Footer />
    </>
  );
}
