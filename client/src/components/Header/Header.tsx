import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Logo</h1>
      <input type="search" placeholder="Search here..." />
      <ul>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/cart'}>Cart</Link>
        </li>
        <li>
          <Link to={'#'}
            onClick={() => {
              // clear localstorage
              navigate('/');
            }}
          >Logout</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
