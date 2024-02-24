import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-gray-100 p-2 border-b border-black border-opacity-25 rounded-sm">
      <h1 className="text-3xl font-semibold">Logo</h1>
      <input
        type="search"
        placeholder="Search here..."
        className="py-1 px-2 border border-black border-opacity-25 rounded-sm "
      />
      <ul className="flex items-center justify-center gap-2">
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
