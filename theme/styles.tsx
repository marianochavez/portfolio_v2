export const styles = {
  global: (props: any) => ({
    html: {
      fontSize: {
        base: "70%",
        md: "100%",
      },
    },
    body: {
      bgColor: "bg-body",
      transitionProperty: "background, background-color, color",
      transitionDuration: "1s",
    },
    "::selection": {
      background: "white",
      color: "black",
    },
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-track": {
      bg: "bg-body",
    },
    "::-webkit-scrollbar-thumb": {
      bg: props.colorMode === "dark" ? "white" : "gray.500",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: props.colorMode === "dark" ? "gray.500" : "gray.600",
    },
  }),
};
