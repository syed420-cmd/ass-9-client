import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export default function Header() {
  const { updateProfile, user, signOutAccount } = useContext(AuthContext);
  console.log(user , updateProfile)
  const { pathname } = useLocation();
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();
  // handle account signout
  const handleSignOut = () => {
    signOutAccount()
      .then(() => {
        setTimeout(() => {
          swal('Logout Successfull', '', 'success');
        }, 500);
        closeMenu();
      })
      .catch((error) => {
        swal('Error an occur', error.message, 'error');
      });
  };

  // console.log(user.photoURL)
  // console.log(user.displayName)
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={"/"} className="text-base">Home</Link></li>
              <li><Link to={"/about"} className="text-base">About Us</Link></li>

            </ul>
          </div>

          <p><Link to={"/"} className="text-2xl font-bold">Nestify</Link></p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={"/"} className="text-base">Home</Link></li>
            <li><Link to={"/about"} className="text-base">About Us</Link></li>
          </ul>
        </div>
        <div className="navbar-end">

          {user ? <a onClick={handleSignOut} className="font-semibold bg-blue-200 hover:bg-blue-300 transition-all text-white px-10 py-2 rounded-lg cursor-pointer">Log out</a>
            :
            <Link to="/login" className="font-semibold bg-blue-200 hover:bg-blue-300 transition-all text-white px-10 py-2 rounded-lg">Login</Link>}
        </div>

        {user &&
          <div className="w-16 rounded-full ml-2">

            <div className="tooltip tooltip-open tooltip-bottom relative z-10" data-tip={user?.displayName ? user?.displayName : ""}>
              {/* <img className="rounded-full" alt="Tailwind CSS Navbar component" /> */}
              <img className="rounded-full" src={user?.photoURL
              } alt="" />
            </div>
          </div>
        }

      </div>
    </div>
  );
}