import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigationBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/blue" className="nav-link">
                Blue
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/red" className="nav-link">
                Red
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/purple" className="nav-link">
                Purple
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/green" className="nav-link">
                Green
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
