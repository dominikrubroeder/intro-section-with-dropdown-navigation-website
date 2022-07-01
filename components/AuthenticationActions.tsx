import React from 'react';

const AuthenticationActions: React.FC = () => {
  return (
    <div className="text-sm grid gap-2 sm:flex sm:items-center md:gap-2 ">
      <button className="text-app-medium-gray hover:text-app-black py-2 px-6">
        Login
      </button>
      <button className="text-app-medium-gray py-2 px-6 border rounded-xl border-app-black hover:text-app-black">
        Register
      </button>
    </div>
  );
};

export default AuthenticationActions;
