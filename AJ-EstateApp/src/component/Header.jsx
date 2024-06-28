import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  signOutUserStart,
  signOutUserFaliure,
  signOutUserSuccess,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //SEARCH BAR
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFaliure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-screen-2xl fixed top-0 left-0 z-50 h-16 w-full">
      <div className="navbar bg-slate-400 px-8 justify-between p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/"
                  className="text-slate-700 hover:text-slate-300 font-bold "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-700 hover:text-slate-300 font-bold"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-700 hover:text-slate-300 font-bold"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
              <span className="text-rose-600">AJ-</span>
              <span className="text-purple-900">ESTATE</span>
            </h1>
          </Link>
        </div>
        <form
          onChange={handleSubmit}
          className="flex bg-slate-100 p-3 rounded-lg items-center sm:shrink-0  "
        >
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent rounded-md p-1 focus:outline-none w-24 sm:w-64 md:w-32 lg:w-48 xl:w-64"
          />
          <button>
            <FaSearch className="text-slate-500" />
          </button>
        </form>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link to="/" className="flex mx-auto gap-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="px-5">
            <div className="w-10 rounded-full ">
              <Link>
                {currentUser ? (
                  <img
                    className="rounded-full h-7 w-7 "
                    src={currentUser.avatar}
                    alt="profile"
                  />
                ) : (
                  <div className="navbar-end">
                    <button href='/sign-in' className="btn flex items-center gap-2 rounded-full px-6 bg-green-700 text-white mr-20">
                      Login
                    </button>
                  </div>
                  // <button >
                  //   Sign in
                  // </button>
                )}
              </Link>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/profile"
                className="text-slate-700 hover:text-slate-300 font-bold "
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-slate-700 hover:text-slate-300 font-bold "
              >
                Home
              </Link>
            </li>
            <li>
              <a
                className="text-slate-700 hover:text-slate-300 font-bold "
                onClick={handleSignOut}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
