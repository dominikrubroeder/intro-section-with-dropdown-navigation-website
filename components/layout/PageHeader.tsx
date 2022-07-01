import Image from 'next/image';
import React, { useState } from 'react';
import AuthenticationActions from '../AuthenticationActions';
import NavigationList from '../navigation/NavigationList';
import PageSidebar from './PageSidebar';

const PageHeader: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="relative w-full bg-white p-6 flex items-center justify-between z-40 animate-fadeDown sm:fixed sm:top-0 sm:left-0 sm:right-0 md:max-w-screen-2xl md:m-auto">
      <div className="flex items-center sm:gap-8">
        <Image
          src="/images/logo.svg"
          className="object-contain"
          alt="Logo"
          width={84}
          height={27}
        />

        <div className="hidden sm:inline-block">
          <NavigationList />
        </div>
      </div>

      <div className="hidden sm:inline-block">
        <AuthenticationActions />
      </div>

      <div
        className="cursor-pointer sm:hidden"
        onClick={() => setShowSidebar((previousState) => !previousState)}
      >
        <Image
          src="/images/icon-menu.svg"
          alt="Menu icon"
          width={32}
          height={18}
        />
      </div>

      <PageSidebar
        isOpen={showSidebar}
        closeSidebar={() => setShowSidebar(false)}
      />
    </header>
  );
};

export default PageHeader;
