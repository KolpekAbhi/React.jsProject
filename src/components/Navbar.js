import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
      <a className="navbar-brand" > Client System </a>
        </li>
      <li className="nav-item">
      <Link to="/"  className="nav-link" >Client Login</Link>
        </li>
        <li className="nav-item">
          <Link  to="/home" className="nav-link active" aria-current="page" > Home </Link>
        </li>
        <li className="nav-item">
          <Link  to="/AddEmpdata"  className="nav-link" > Add CLIENT </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
};
export default Navbar;