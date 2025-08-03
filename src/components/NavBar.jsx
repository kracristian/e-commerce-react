import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>My E-Commerce Store</h1>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Car">Products</Link>
        </li>
        <li>
          <Link to="/porsi">About</Link>
        </li>
        <button className="btn btn-outline-light position-relative">
          <i className="bi bi-cart3 fs-4"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3<span className="visually-hidden">productos en el carrito</span>
          </span>
        </button>
      </ul>
    </nav>
  );
}
export default NavBar;
