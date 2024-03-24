import { FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-teal-300 shadow-lg" >
      <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">AJ</span>
            <span className="text-slate-800">ESTATE</span>
          </h1>
        </Link>

        <form className="flex bg-slate-100 p-3 rounded-lg items-center ">
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent rounded-md p-1 focus:outline-none w-24 sm:w-64 md:w-32 lg:w-48 xl:w-64"
          />
          <FaSearch className="text-slate-500" />
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

          <Link to="/sign-in">
            <li className="text-slate-700 hover:text-slate-300 font-bold">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
