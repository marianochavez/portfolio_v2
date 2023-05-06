import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link as LinkScroll } from "react-scroll";

import { DataContext } from "../../context/DataContext";

const Footer = () => {
  const { language, portfolio } = useContext(DataContext);

  return (
    <Box borderTopWidth="1px" mt={20} p={10}>
      <Flex flexDir={{ base: "row", md: "row" }}>
        <Flex
          alignItems="center"
          flexDir="column"
          justifyContent="space-around"
        >
          <LinkScroll to="intro" smooth>
            <Heading _hover={{ cursor: "pointer" }} fontSize="4xl">
              MC
            </Heading>
          </LinkScroll>
          <Text>
            {language === "es"
              ? `< Hecho con 💜 por Mariano / >`
              : `< Made with 💜 by Mariano / >`}
          </Text>
        </Flex>
        <Flex
          flex={1}
          flexDir={{ base: "column", md: "row" }}
          gap={5}
          justifyContent="end"
        >
          {portfolio.sections.map((section) => (
            <Button key={section.title} variant="link">
              <LinkScroll smooth offset={-70} to={section.to}>
                {section.title}
              </LinkScroll>
            </Button>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
