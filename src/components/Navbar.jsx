import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then(result =>{})
    .catch(error=> console.error(error))
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Delicious Food</a>
        </div>
        <div className="">

          <div className='mx-2'>
          <Link to="/">Home</Link>
          </div>
          <div className='mx-2'>
          <Link to="/blog">Blog</Link>
          </div>
          <div className='mx-2'>
          {user && <Link><FaUserCircle></FaUserCircle></Link>}
          </div>
          <div className='mx-2'>
          {
            user ?
              <button onClick={handleLogout}>Logout</button> :
              <Link to="/login"><button>Login</button></Link>
          }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;