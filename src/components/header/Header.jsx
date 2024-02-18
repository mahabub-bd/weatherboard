import { Favorite, Search } from "../../constants/images";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
              <input
                className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                type="search"
                placeholder="Search Location"
                required
              />
              <button type="submit">
                <img src={Search} />
              </button>
            </div>
          </form>
          <Favorite />
          <FavoriteListModal />
        </div>
      </nav>
    </header>
  );
}
