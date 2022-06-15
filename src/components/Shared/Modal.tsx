import {FunctionComponent} from 'react';
import './Modal.scss';

import AddModal from './AddModal';
import FilterModal from './FilterModal';
import CharacterModal from './CharacterModal';

interface IModalProps {
  setShowModal: Function;
  showModal: {
    showOn: boolean;
    type: string;
  };
  children: any;
}

const Modal: FunctionComponent<IModalProps> = (props) => {
  const {showModal, setShowModal, children} = props;
  if (showModal.showOn) {
    return (
      <>
        {children}

        {showModal.type === 'add' ? (
          <AddModal setShowModal={setShowModal} />
        ) : (
          ''
        )}
        {showModal.type === 'filter' ? (
          <FilterModal setShowModal={setShowModal} />
        ) : (
          ''
        )}
        {showModal.type === 'char' ? (
          <CharacterModal setShowModal={setShowModal} />
        ) : (
          ''
        )}
      </>
    );
  }

  return <>{children}</>;
};

export default Modal;
