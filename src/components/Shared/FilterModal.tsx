import {CgClose} from 'react-icons/cg';
import {FunctionComponent} from 'react';

interface IFilterModal {
  setShowModal: Function;
  showModal: any;
}
const FilterModal: FunctionComponent<IFilterModal> = ({
  setShowModal,
  showModal,
}) => {
  return (
    <div className='modal'>
      <div className='modal-body' style={{minWidth: '300px'}}>
        <div className='modal-title'>
          <h2>Filter</h2>
          <h2>
            <CgClose
              onClick={() => setShowModal({...showModal, type: ''})}
              style={{cursor: 'pointer'}}
            />
          </h2>
        </div>
        <div className='modal-content'>
          <div>
            <label>Rick</label>
            <input
              type='radio'
              name='filter'
              value='rick'
              onChange={(e) => {
                setShowModal({...showModal, filter: e.target.value});
              }}
            />
          </div>
          <div>
            <label>Morty</label>
            <input
              onChange={(e) => {
                setShowModal({...showModal, filter: e.target.value});
              }}
              type='radio'
              name='filter'
              value='morty'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
