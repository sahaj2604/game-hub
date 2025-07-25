import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardComponent from "./GameCardComponent";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        gap={10}
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardComponent key={item}>
              <GameCardSkeleton  />
            </GameCardComponent>
          ))}
        {games.map((game) => (
          <GameCardComponent key={game.id}>
            <GameCard game={game}  />
          </GameCardComponent>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
