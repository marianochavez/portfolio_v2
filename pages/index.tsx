import Head from "next/head";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { Element as ScrollSection } from "react-scroll";

import Navbar from "@/components/ui/Navbar";
import ChevronNav from "@/components/ui/ChevronNav";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

// TODO: implementar un Loading en el dynamic de Header
const HeaderSection = dynamic(()=> import("@/components/sections/HeaderSection"),{ssr: false});
const AboutSection = dynamic(()=> import("@/components/sections/AboutSection"),{ssr: false});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariano Chavez</title>
      </Head>

      <Navbar />

      <ScrollSection name="intro">
        <Box minH='100vh'>
          <HeaderSection />
        </Box>
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
