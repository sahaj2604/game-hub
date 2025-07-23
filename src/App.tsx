import { Box, Grid, GridItem } from "@chakra-ui/react"

const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area={"nav"} bg={'coral'}>Nav</GridItem>
      <Box display={{ base: "none", lg: "block" }}>
  <GridItem area="aside" bg="blue">
    Aside
  </GridItem>
</Box>
      <GridItem area={"main"} bg={'yellow'}>Main</GridItem>
    </Grid>
  )
}

export default App;