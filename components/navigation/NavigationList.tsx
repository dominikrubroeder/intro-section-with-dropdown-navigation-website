import React from 'react';
import { navigationData } from '../../data';
import NavigationDropdown from './NavigationDropdown';

const NavigationList: React.FC = () => {
  return (
    <nav className="hidden sm:inline-block">
      <ul className="flex items-center gap-4 text-sm md:gap-8">
        {navigationData.map((navigationItem, index) => {
          if (navigationItem.subCategories.length > 0) {
            return (
              <li key={index} className="flex items-center gap-1">
                {navigationItem.title}
              </li>
            );
          } else {
            return (
              <li key={index}>
                <NavigationDropdown
                  title={navigationItem.title}
                  subCategories={navigationItem.subCategories}
                />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavigationList;
