import Image from 'next/image';
import React from 'react';
import AuthenticationActions from '../AuthenticationActions';
import NavigationList from '../navigation/NavigationList';

interface PageSidebarProps {
  isOpen: boolean;
  closeSidebar: (params: any) => any;
}

const PageSidebar: React.FC<PageSidebarProps> = (props) => {
  return (
    <>
      {props.isOpen && (
        <div className="fixed top-0 right-0 max-w-xs w-full h-full bg-white z-50 animate-fadeToLeft">
          <header className="flex items-center justify-end p-4">
            <Image
              src="/images/icon-close-menu.svg"
              width={26}
              height={26}
              alt="Icon close menu"
              onClick={props.closeSidebar}
              className="cursor-pointer"
            />
          </header>

          <div className="grid gap-4 p-8 pt-0">
            <NavigationList />
            <AuthenticationActions />
          </div>
        </div>
      )}
      {props.isOpen && (
        <div
          className="fixed inset-0 bg-app-black/70 z-40"
          onClick={props.closeSidebar}
        ></div>
      )}
    </>
  );
};

export default PageSidebar;
