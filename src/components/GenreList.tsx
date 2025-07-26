import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface prop{
    onSelectGenre:(genre:Genre)=>void;
}
const GenreList = ({onSelectGenre}:prop) => {
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
            <Button variant={'link'} fontSize={'lg'} onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
