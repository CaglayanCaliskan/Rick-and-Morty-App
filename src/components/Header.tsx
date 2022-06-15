import {AiTwotoneFilter} from 'react-icons/ai';
// setShowModal type
import {FunctionComponent} from 'react';

interface IHeaderProps {
  setShowModal: Function;
}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header>
      <h1>
        Rick and Morty{' '}
        <button
          className='btn'
          style={{background: '#fff'}}
          onClick={() => props.setShowModal({showOn: true, type: 'filter'})}
        >
          <AiTwotoneFilter size={25} fill='grey' />
        </button>
      </h1>

      <button
        onClick={() =>
          props.setShowModal({
            showOn: true,
            type: 'add',
          })
        }
        className='btn'
      >
        Add new character
      </button>
    </header>
  );
};

export default Header;
