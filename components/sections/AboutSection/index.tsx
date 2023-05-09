import { useContext } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Highlight,
  Link,
  Show,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Element as ScrollSection } from "react-scroll";

import { DataContext } from "@/context/DataContext";
import ChevronNav from "@/components/ui/ChevronNav";

import styles from "./about.module.css";


const AboutSection = () => {
  const { portfolio, language } = useContext(DataContext);
  // const clock = useScrollClock({ scrollAccelerationFactor: 30 });
  // const rotate = useTransform(clock, (time) => time / 30);

  return (
    <ScrollSection name="about">
      <Container
        layout
        as={motion.div}
        maxW={{ base: "90vw", md: "container.md", lg: "container.lg" }}
        pt={10}
      >
        <Flex
          bg="bg-body"
          flexDir={{ base: "column", md: "row" }}
          p={3}
          className={styles.boxGlow}
        >
          <Box flex={1} order={[2, 2, 1]} p={2}>
            <Text size="sm" whiteSpace="pre-wrap">
              {language === "es" ? "Hola " : "Hi "}
              <span aria-labelledby="wave" className="wave" role="img">
                👋🏻
              </span>
              ,{language === "es" ? ` soy` : ` I'm`} {portfolio.about.firstName}
              !
              <br />
              <Highlight
                query={highlightQuery}
                styles={{
                  color: "purple.400",
                  fontWeight: "bold",
                  whiteSpace: "pre-wrap",
                }}
              >
                {portfolio.about.bio}
              </Highlight>
            </Text>
            <Center display={{ base: "flex", md: "none" }} pt={4}>
              <Link
                isExternal
                _hover={{ textDecor: "none" }}
                href="/cv-Mariano-Chavez.pdf"
                order={[1, 3]}
              >
                <Button layout as={motion.button} colorScheme="purple">
                  {language === "es" ? "Descargar CV" : "Download resume"}
                </Button>
              </Link>
            </Center>
          </Box>
          <Center
            borderLeft={{ base: "0px", md: "1px" }}
            flex={1}
            flexDir={{ base: "row", md: "column" }}
            gap={5}
            order={[1, 1, 2]}
            pl={2}
          >
            <Image
              alt="Profile image"
              src={portfolio.about.img}
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                width: "10rem",
                height: "10rem",
              }}
              loading="lazy"
            />
            <Show above="md">
              <Heading order={2} size="lg" textAlign="center">
                {portfolio.about.firstName} {portfolio.about.lastName}
              </Heading>
              <Link
                isExternal
                _hover={{ textDecor: "none" }}
                href="/cv-Mariano-Chavez.pdf"
                order={[1, 3]}
              >
                <Button layout as={motion.button} colorScheme="purple">
                  {language === "es" ? "Descargar CV" : "Download resume"}
                </Button>
              </Link>
            </Show>
          </Center>
        </Flex>
        {/* <BoxMotion
          bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(205,29,253,1) 20%, rgba(69,245,252,1) 100%)"
          bottom={0}
          h="500px"
          left={0}
          margin="auto"
          position="absolute"
          right={0}
          rounded="full"
          style={{ rotate, scale: 2.4 }}
          top={0}
          w="500px"
        /> */}
      </Container>
      <ChevronNav toElement="projects" />
    </ScrollSection>
  );
};

const highlightQuery = [
  "Backend",
  "Frontend",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Rails",
  "Django",
  "Ingeniería en Sistemas de Información",
  "Information Systems Engineering",
];

export default AboutSection;
