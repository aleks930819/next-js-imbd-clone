'use client';

import Link from 'next/link';

import { useSearchParams } from 'next/navigation';

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  const classStyle = `cursor-pointer mx-4 lg:mx-6 hover:text-amber-600 transition-all duration-300 ease-in-out ${
    genre && genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-md' : ''
  }}`;
  return (
    <div>
      <Link href={`/?genre=${param}`} className={classStyle}>
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
