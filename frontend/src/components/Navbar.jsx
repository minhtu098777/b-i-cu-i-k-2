import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          <Link to="/">TopCV</Link>
        </div>

        <ul className="menu">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>

          <li>
            <Link to="/jobs">Việc làm</Link>
          </li>

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link className="login-btn" to="/login">
            Đăng nhập
          </Link>

          <Link className="register-btn" to="/register">
            Đăng ký
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;