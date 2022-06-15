import {useEffect} from 'react';
import './CharacterList.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
//components
import Character from './Character';
// query
import {useGetAllCharactersQuery} from '../graphql/queries/getAllCharactersQuery';

const CharacterList = () => {
  const {
    characters,
    count,
    currentPage,
    nextPage,
    getCharacters,
    getMoreCharacters,
  } = useGetAllCharactersQuery();

  useEffect(() => {
    getCharacters({
      variables: {
        page: 1,
        filtered: '',
      },
    });
  }, [getCharacters]);

  const loadMore = () => {
    nextPage && getMoreCharacters(currentPage + 1);
  };

  return (
    <InfiniteScroll
      className='character-list'
      dataLength={count}
      next={loadMore}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {characters?.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </InfiniteScroll>
  );
};

export default CharacterList;
