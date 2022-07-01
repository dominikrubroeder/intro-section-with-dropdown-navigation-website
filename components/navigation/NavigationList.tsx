import Link from 'next/link';
import React from 'react';
import { navigationData } from '../../data';
import NavigationDropdown from './NavigationDropdown';

const NavigationList: React.FC = () => {
  return (
    <nav>
      <ul className="grid gap-4 text-sm sm:flex sm:items-center md:gap-8">
        {navigationData.map((navigationItem, index) => {
          if (navigationItem.subCategories.length > 0) {
            return (
              <li
                key={index}
                className="cursor-pointer text-app-medium-gray hover:text-app-black"
              >
                <NavigationDropdown
                  title={navigationItem.title}
                  subCategories={navigationItem.subCategories}
                />
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className="cursor-pointer text-app-medium-gray hover:text-app-black"
              >
                <Link href={`/${navigationItem.title.toLowerCase()}`}>
                  {navigationItem.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavigationList;
