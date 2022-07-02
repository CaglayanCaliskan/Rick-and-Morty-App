import {useEffect} from 'react';
import './CharacterList.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
//components
import Character from './Character';
// query
import {useGetAllCharactersQuery} from '../graphql/queries/getAllCharactersQuery';

import {FunctionComponent} from 'react';

interface ICharacterList {
  showModal: {
    showOn: boolean;
    type: string;
    filter: string;
  };
}
const CharacterList: FunctionComponent<ICharacterList> = ({showModal}) => {
  const {
    characters,
    count,
    currentPage,
    nextPage,
    getCharacters,
    getMoreCharacters,
    refetch,
  } = useGetAllCharactersQuery();

  useEffect(() => {
    getCharacters({
      variables: {
        page: 1,
        filtered: showModal.filter,
      },
    });
    if (showModal.filter !== '') {
      refetch({filtered: showModal.filter});
    }
  }, [getCharacters, showModal.filter, refetch]);

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
