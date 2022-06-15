import {CgClose} from 'react-icons/cg';
import {FunctionComponent} from 'react';

interface IFilterModal {
  setShowModal: Function;
}
const FilterModal: FunctionComponent<IFilterModal> = ({setShowModal}) => {
  return (
    <div className='modal'>
      <div className='modal-body' style={{minWidth: '300px'}}>
        <div className='modal-title'>
          <h2>Filter</h2>
          <h2>
            <CgClose
              onClick={() => setShowModal({showOn: false, type: ''})}
              style={{cursor: 'pointer'}}
            />
          </h2>
        </div>
        <div className='modal-content'>
          <div>
            <label>Rick</label>
            <input type='radio' name='filter' value='rick' />
          </div>
          <div>
            <label>Morty</label>
            <input type='radio' name='filter' value='morty' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
