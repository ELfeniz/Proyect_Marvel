import './styles.scss';
import { BsSearch } from 'react-icons/bs';
import Filter_2 from '@/modules/core/components/molecules/Filter_2';
import PropTypes from 'prop-types';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

export default function Filter({ totalItems }) {

return (
    <div className="mvl-character-gri-filters">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contenerdor_search">
              <div className="linea">
                <BsSearch className="icon" />
                <input type="text" className="color_f" placeholder="SEARCH" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contenerdor_2">
              <BsSearch className="icon2" />
              <Filter_2/>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <div className="contenerdor_3">
              <h5 className="letra_result">2702 RESULTS {totalItems}</h5>
              <span>{totalItems}</span>
            </div>
          </div>
          <div className="col">
            <div className="contenerdor_4">
              <h6 className="letra">SORT BY</h6>
              <select className="form-select">
                <option selected>A-Z</option>
                <option value="1">Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
