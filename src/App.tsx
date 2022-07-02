import {useState} from 'react';
import './App.scss';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import Modal from './components/Shared/Modal';

function App() {
  const [showModal, setShowModal] = useState({
    showOn: false,
    type: '',
    filter: '',
  });

  return (
    <div className='App'>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <Header setShowModal={setShowModal} />
        <CharacterList showModal={showModal} />
      </Modal>
    </div>
  );
}

export default App;
