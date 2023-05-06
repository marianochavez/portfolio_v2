import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

import { DataContext } from "../../context/DataContext";

const BoxMotion = motion(Box);
const TextMotion = motion(Text);

const SectionToggleVariants = {
  hover: { scale: 1.2, transition: { duration: 0.1 } },
  tap: { scale: 0.9, transition: { duration: 0.1 } },
};

const Navbar = () => {
  const { portfolio } = useContext(DataContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [display, setDisplay] = useState<"none" | "block">("none");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    return scrollY.onChange(() => {
      scrollY.get() === 0 ? setDisplay("none") : setDisplay("block");
    });
  }, [scrollY]);

  return (
    <BoxMotion
      display={display}
      h="70px"
      position="fixed"
      style={{ opacity }}
      top={0}
      w="100%"
      zIndex={99}
    >
      <Flex
        alignItems="center"
        backdropFilter="blur(8px)"
        bg={useColorModeValue("#ffffff4d", "#0000004d")}
        h="100%"
        p={3}
      >
        <TextLogo />
        <HStack flex={1} h="100%" justifyContent="end">
          <LangToggleButton />
          <ColorToggleButton />
          <IconButton
            aria-label="Menu button"
            h="40px"
            icon={<RiMenu3Line style={{ fontSize: "20px" }} />}
            id="Drawer icon"
            rounded="full"
            w="40px"
            onClick={onOpen}
          />
        </HStack>
      </Flex>
      <DrawerMenu
        isOpen={isOpen}
        sections={portfolio.sections}
        onClose={onClose}
      />
    </BoxMotion>
  );
};

type DrawerMenuProps = {
  isOpen: boolean;
  sections: { title: string; to: string }[];
  onClose: () => void;
};

const DrawerMenu = ({ isOpen, sections, onClose }: DrawerMenuProps) => (
  <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton fontSize="2xl" mt={6} />
      <DrawerHeader>
        <LinkScroll smooth to="intro" onClick={onClose}>
          MC
        </LinkScroll>
      </DrawerHeader>

      <DrawerBody>
        <VStack gap={5} mt={8}>
          {sections.map((section, i) => (
            <Button
              key={section.title}
              as={motion.button}
              initial="initial"
              transitionDelay={`${i / 100}s`}
              variant="unstyled"
              variants={SectionToggleVariants}
              whileHover="hover"
              whileInView="animate"
              whileTap="tap"
            >
              <LinkScroll smooth offset={-70} to={section.to}>
                <Heading fontSize="2xl" onClick={onClose}>
                  {section.title}
                </Heading>
              </LinkScroll>
            </Button>
          ))}
        </VStack>
      </DrawerBody>

      <DrawerFooter alignItems="center" justifyContent="space-evenly" my={10}>
        <DrawerSocialButton
          ariaLabel="linkedin"
          href="https://www.linkedin.com/in/mariano-chavez"
          icon={<BsLinkedin />}
        />
        <DrawerSocialButton
          ariaLabel="twitter"
          href="https://twitter.com/chavedoo"
          icon={<BsTwitter />}
        />
        <DrawerSocialButton
          ariaLabel="github"
          href="https://github.com/marianochavez"
          icon={<BsGithub />}
        />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

type DrawerSocialButton = {
  href: string;
  icon: React.ReactElement<any>;
  ariaLabel: string;
};

const DrawerSocialButton = ({ href, ariaLabel, icon }: DrawerSocialButton) => (
  <IconButton
    isExternal
    aria-label={ariaLabel}
    as={Link}
    bg="none"
    fontSize="4xl"
    href={href}
    icon={icon}
    rounded="full"
  />
);

const IconToggleVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
};

const ColorToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Change color mode button"
      h="40px"
      icon={
        <AnimatePresence initial={false} mode="wait">
          <BoxMotion
            key={colorMode}
            animate="animate"
            exit="exit"
            initial="initial"
            transition={{ duration: 0.3 }}
            variants={IconToggleVariants}
          >
            {colorMode === "light" ? <ImSun /> : <FaMoon />}
          </BoxMotion>
        </AnimatePresence>
      }
      rounded="full"
      variant="solid"
      w="40px"
      onClick={toggleColorMode}
    />
  );
};

const LangToggleButton = () => {
  const { language, toggleLanguage } = useContext(DataContext);

  return (
    <Button
      h="40px"
      rounded="full"
      variant="solid"
      onClick={() => toggleLanguage()}
    >
      <AnimatePresence initial={false} mode="wait">
        <TextMotion
          key={language}
          animate="animate"
          exit="exit"
          initial="initial"
          transition={{ duration: 0.3 }}
          variants={IconToggleVariants}
        >
          {language === "es" ? "Español" : "English"}
        </TextMotion>
      </AnimatePresence>
    </Button>
  );
};

const TextLogo = () => (
  <Heading
    display={{ base: "none", lg: "flex" }}
    flex={1}
    fontSize="4xl"
    style={{ cursor: "pointer" }}
  >
    <LinkScroll smooth to="intro">
      MC
    </LinkScroll>
  </Heading>
);

export default Navbar;
