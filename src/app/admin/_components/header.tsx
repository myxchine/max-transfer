import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-white h-[80px] bg-opacity-90 text-black border-b  border-gray-200 p-4 md:px-4 flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm">
      <Link href="/admin">
        <div>
          <p className="text-2xl font-bold text-center">MYX-TRANSFER</p>
          <p className="text-left text-xs text-black/80 pl-[1px]">Admin View</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
