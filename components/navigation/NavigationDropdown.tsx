import React, { useState } from 'react';
import IconArrowDown from '../icons/IconArrowDown';
import { INavigationItem } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

const NavigationDropdown: React.FC<INavigationItem> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((previousState) => !previousState);
  };

  return (
    <div className="relative">
      <span className="flex items-center gap-1" onClick={onClickHandler}>
        {props.title}
        <IconArrowDown
          className={`transition-all ${isOpen ? '-rotate-180' : 'rotate-0'}`}
        />
      </span>

      {isOpen && (
        <ul
          className={`absolute top-8 grid bg-white py-4 px-6 shadow-xl rounded-xl border border-gray-100 animate-fadeDown ${
            props.subCategories[0].icon !== '' ? 'right-0' : 'left-0'
          }`}
        >
          {props.subCategories.map((category, index) => (
            <li key={index} className="w-full p-2 rounded-xl hover:bg-gray-100">
              <Link
                href={`/${props.title
                  .replace(' ', '')
                  .toLowerCase()}/${category.title
                  .replace(' ', '')
                  .toLowerCase()}`}
              >
                <a className="flex items-center gap-2">
                  {category.icon != '' && (
                    <div className="relative w-4 h-4">
                      <Image
                        alt="Navigation icon"
                        layout="fill"
                        src={category.icon}
                        className="object-contain"
                      />
                    </div>
                  )}
                  {category.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationDropdown;
