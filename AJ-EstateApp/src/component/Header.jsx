import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
//SEARCH BAR
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


  return (
    <header className="bg-teal-400 shadow-lg sticky top-0">
      <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">AJ</span>
            <span className="text-purple-900">ESTATE</span>
          </h1>
        </Link>

        <form onChange={handleSubmit} className="flex bg-slate-100 p-3 rounded-lg items-center ">
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
        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="text-slate-700 hover:text-slate-300 font-bold hidden sm:inline md:inline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="text-slate-700 hover:text-slate-300 font-bold hidden sm:inline md:inline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-slate-700 hover:text-slate-300 font-bold sm:inline md:inline">
                {" "}
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
