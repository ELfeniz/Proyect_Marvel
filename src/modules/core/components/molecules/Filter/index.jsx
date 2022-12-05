import './styles.scss';
import { BsSearch } from 'react-icons/bs';

export default function Filter() {
  return (
    <div className="mvl-character-gri-filters">
      <div className="contenerdor_search">
        <div className="linea">
          <BsSearch className="icon" />
          <input type="text" className="color_f" placeholder="SEARCH" />
        </div> 
      </div>
      <div className="contenerdor_2">
        <BsSearch className="icon2" />
        <BsSearch className="icon2" />
      </div>
      <div className="contenerdor_3">
        <BsSearch className="icon2" />
        <BsSearch className="icon2" />
      </div>
      <div className="contenerdor_4">
        <BsSearch className="icon2" />
        <BsSearch className="icon2" />
      </div>
    </div>
  );
}
