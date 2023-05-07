import { useContext } from "react";
import { Box, Center, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { Element as ScrollSection } from "react-scroll";

import { DataContext } from "../../../context/DataContext";

import ProjectItem from "./ProjectItem";
import ChevronNav from "@/components/ui/ChevronNav";

const ProjectSection = () => {
  const { language, portfolio } = useContext(DataContext);

  return (
    <ScrollSection name="projects">
      <Center py={10}>
        <Heading fontSize="4xl">
          {language === "es" ? "Proyectos" : "Projects"}
        </Heading>
      </Center>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={"6"}
        mx={"6"}
      >
        {portfolio.projects.map((project) => (
          <ProjectItem
            key={project.name}
            language={language}
            project={project}
          />
        ))}
      </Grid>
      <ChevronNav toElement="contact" />
    </ScrollSection>
  );
};

export default ProjectSection;
