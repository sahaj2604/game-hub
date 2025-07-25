import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
  const { error, data,isLoading } = useGenres();
  return (
    <>
    {isLoading && <Spinner/>}
    <List>
      {error && <p>{error}</p>}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCroppedImage(genre.image_background)}
              borderRadius={10}
              
            />
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
