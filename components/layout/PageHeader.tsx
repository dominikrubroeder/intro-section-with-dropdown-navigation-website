import Image from 'next/image';
import React from 'react';
import NavigationList from '../navigation/NavigationList';

const PageHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white p-6 flex items-center justify-between">
      <div className="flex items-center sm:gap-8">
        <Image
          src="/images/logo.svg"
          className="object-contain"
          alt="Logo"
          width={84}
          height={27}
        />

        <NavigationList />
      </div>

      <div className="hidden text-sm sm:flex sm:items-center md:gap-2 ">
        <button className="py-2 px-6">Login</button>
        <button className="py-2 px-6 border rounded-xl">Register</button>
      </div>

      <div className="sm:hidden">
        <Image
          src="/images/icon-menu.svg"
          alt="Menu icon"
          width={32}
          height={18}
        />
      </div>
    </header>
  );
};

export default PageHeader;
