import React from 'react';
import Link from 'next/link';
import IconArrowDown from '../icons/IconArrowDown';
import { INavigationItem } from '../../data';

const NavigationDropdown: React.FC<INavigationItem> = (props) => {
  return (
    <Link href={`/${props.title.toLowerCase()}`}>
      <span className="flex items-center gap-1">
        {props.title}
        {props.subCategories.length > 0 && <IconArrowDown />}
      </span>
    </Link>
  );
};

export default NavigationDropdown;
