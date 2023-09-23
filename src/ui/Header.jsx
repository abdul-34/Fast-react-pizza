import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-600 bg-yellow-400 px-4 py-3 text-xl font-semibold uppercase sm:px-6 sm:py-4">
      <Link to="/">
        <h1 className=" font-normal tracking-widest">Fast React Pizza Co.</h1>
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
