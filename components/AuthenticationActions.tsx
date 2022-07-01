import React from 'react';

const AuthenticationActions: React.FC = () => {
  return (
    <div className="text-sm grid gap-2 sm:flex sm:items-center md:gap-2 ">
      <button className="py-2 px-6">Login</button>
      <button className="py-2 px-6 border rounded-xl">Register</button>
    </div>
  );
};

export default AuthenticationActions;
