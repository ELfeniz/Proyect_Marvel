import { NavLink } from 'react-router-dom';
import './styles.scss';


export function NavMenu() {
  return (

    
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" to="/">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo" />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/NEWS">
            NEWS
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/COMICS">
            COMICS
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            CHARACTERS
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/MOVIES">
            MOVIES
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/TV_SHOWS">
            TV SHOWS
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/GAMES">
            GAMES
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/VIDEOS">
            VIDEOS
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/MORE">
            MORE
          </NavLink>
        </div>
      </div>

      <div className="mvl-navbar--right"></div>
    </nav>
  );
}
