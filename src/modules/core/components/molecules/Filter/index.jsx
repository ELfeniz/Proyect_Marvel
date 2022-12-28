import './styles.scss';



import PropTypes from 'prop-types';


Filter.propTypes = {
  totalItems: PropTypes.number.isRequired  // ctotal de items
};

export default function Filter({ totalItems }) {




  return (
    <div className="mvl-character-gri-filters">
      <div className="container">
        <div className="row">
          <div className="col">
            
          </div>

        </div>
        <div className="row align-items-center">
          <div className="col">
            <div className="contenerdor_3">
              <h5 className="letra_result"> {totalItems} RESULTS</h5>
            </div>
          </div>
          <div className="col">
            <div className="contenerdor_4">
              <h5 className="letra2">SORT BY</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
