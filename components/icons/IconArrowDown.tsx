import React from 'react';

interface IconArrowDownProps {
  className: string;
}

const IconArrowDown: React.FC<IconArrowDownProps> = (props) => {
  return (
    <svg
      width="10"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
    </svg>
  );
};

export default IconArrowDown;
