import { useContext } from "react";
import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { Element as ScrollSection } from "react-scroll";

import { DataContext } from "../../../context/DataContext";

import ProjectItem from "./ProjectItem";
import ChevronNav from "@/components/ui/ChevronNav";

const ProjectSection = () => {
  const { language, portfolio } = useContext(DataContext);

  return (
    <ScrollSection name="projects">
      <Center p={10}>
        <Heading fontSize="4xl">
          {language === "es" ? "Proyectos" : "Projects"}
        </Heading>
      </Center>

      <SimpleGrid
        columns={[1, 2, 2, 3]}
        gap={6}
        px={{ base: "3xl", md: "2xl", lg: "5xl" }}
      >
        {portfolio.projects.map((project) => (
          <ProjectItem
            key={project.name}
            language={language}
            project={project}
          />
        ))}
      </SimpleGrid>
      <ChevronNav toElement="contact" />
    </ScrollSection>
  );
};

export default ProjectSection;
