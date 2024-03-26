import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-3">
        <img
          src={currentUser.avatar}
          alt="Profil"
          className="rounded-full h-24 w-24 object-cover bg-teal-400 
          cursor-pointer self-center mt-2 "
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email address"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button
          className="bg-lime-700 p-3 rounded-lg 
        text-white text-semibold uppercase 
        hover:opacity-85 disable:opacity-95"
        >
          Update
        </button>

      </form>
      <div className="flex flex-row justify-between mt-5 ">
        <span className="text-red-600 text-semibold cursor-pointer">Delete Accout</span>
        <span className="text-red-600 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
