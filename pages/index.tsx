import {Box} from "@chakra-ui/react";
import {Element as ScrollSection} from "react-scroll";

import Navbar from "@/components/ui/Navbar";
import HeaderSection from "@/components/sections/HeaderSection";
import AboutSection from "@/components/sections/AboutSection";
import ChevronNav from "@/components/ui/ChevronNav";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <Box>
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
    </Box>
  );
}
