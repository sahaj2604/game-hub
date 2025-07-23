import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar/>
      </GridItem>
      <Box display={{ base: "none", lg: "block" }}>
        <GridItem area="aside" bg="blue">
          Aside
        </GridItem>
      </Box>
      <GridItem area={"main"} bg={"yellow"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
