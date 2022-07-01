import Image from 'next/image';
import React from 'react';
import { clientData } from '../data';

const ClientList: React.FC = () => {
  return (
    <ul className="flex items-center justify-between gap-4">
      {clientData.map((client, index) => (
        <li key={index}>
          <Image
            src={client.src}
            alt={`Client ${client.name}`}
            width={client.width}
            height={client.height}
          />
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
