import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface props{
    children:ReactNode;
}
const GameCardComponent = ({children}:props) => {
  return (
    <Box overflow={"hidden"} borderRadius={10} width={"300px"}>
      {children}
    </Box>
  );
};

export default GameCardComponent;
