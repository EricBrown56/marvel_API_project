import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to="/">
        <img src='marvel.png' alt='Marvel Logo' height='100'/>
      </Link>
      <nav className='clearfix'>
        <NavLink to='/characters' activeClassName='active'>Browse Characters</NavLink>
        <NavLink to='/comics' activeClassName='active'>Comics</NavLink>

      </nav>
    </>
  );
}

export default NavBar;