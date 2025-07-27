import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardComponent from "./GameCardComponent";
import useGames from "../hooks/useGames";
import type { GameQuery } from "../App";

interface prop{
    gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:prop) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardComponent key={item}>
              <GameCardSkeleton  />
            </GameCardComponent>
          ))}
        {data.map((game) => (
          <GameCardComponent key={game.id}>
            <GameCard game={game}  />
          </GameCardComponent>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
