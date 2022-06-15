import {ICharacter} from '../types';
import './Character.scss';

const Character = ({id, name, image, location}: ICharacter) => {
  return (
    <div className='character' onClick={() => console.log(id, name, image)}>
      <img src={image} alt={name} />
      <div className='character-info'>
        <p id='id'>
          #id: <span>{id}</span>
        </p>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Location: <span>{location?.name}</span>
        </p>
      </div>
    </div>
  );
};

export default Character;
