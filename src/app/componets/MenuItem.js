import Link from 'next/link';

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link
        href={address}
        className="cursor-pointer mx-4 lg:mx-6 hover:text-amber-600 transition-all duration-300 ease-in-out"
      >
        <Icon className="text-2xl sm:hidden mx-4 " />
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
