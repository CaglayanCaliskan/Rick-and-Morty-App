import {CgClose} from 'react-icons/cg';
import {MdOutlinePhotoCamera} from 'react-icons/md';
import {FunctionComponent} from 'react';

interface IAddModal {
  setShowModal: Function;
}
const AddModal: FunctionComponent<IAddModal> = ({setShowModal}) => {
  return (
    <div className='modal'>
      <div className='modal-body'>
        <div className='modal-title' style={{border: 'none', margin: '0'}}>
          <p></p>
          <h2>
            <CgClose
              onClick={() => setShowModal({showOn: false, type: ''})}
              style={{cursor: 'pointer'}}
            />
          </h2>
        </div>
        <div className='modal-content'>
          <section>
            <MdOutlinePhotoCamera size={40} />
            <h2>Add photo</h2>
          </section>
          <div>
            <label>Name</label>
          </div>
          <div>
            <label>Location</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
