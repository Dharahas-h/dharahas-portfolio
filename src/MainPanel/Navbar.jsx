import { page } from "../constants";

const Navbar = ({ setPage }) => {
  return (
    <div className="nav-panel">
      {/* {<div className="nav-panel-header text-nav-header">{currentPage}</div>} */}
      <ul className="nav-items-container">
        <li
          className="text-nav-item nav-item"
          onClick={() => setPage({ page: page.ABOUT })}
        >
          {page.ABOUT}
        </li>
        <li
          className="text-nav-item nav-item"
          onClick={() => setPage({ page: page.PROJECTS })}
        >
          {page.PROJECTS}
        </li>
        <li
          className="text-nav-item nav-item"
          onClick={() => setPage({ page: page.EXPERIENCE })}
        >
          {page.EXPERIENCE}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
