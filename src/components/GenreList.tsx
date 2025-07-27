import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface prop{
    onSelectGenre:(genre:Genre)=>void;
    selectedGenre:Genre | null;
}
const GenreList = ({selectedGenre,onSelectGenre}:prop) => {
  const { error, data,isLoading } = useGenres();
  
  return (
    <>
    <Heading fontSize={'4xl'} marginBottom={3}>Genre</Heading>
    {isLoading && <Spinner/>}
    <List>
      {error && <p>{error}</p>}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
            objectFit={'cover'}
              boxSize={"32px"}
              src={getCroppedImage(genre.image_background)}
              borderRadius={10}
              
            />
            <Button variant={'link'} whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id ===selectedGenre?.id?'bold':'normal'} fontSize={'lg'} onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
