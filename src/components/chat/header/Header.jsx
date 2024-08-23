// src/components/chat/Header.jsx
import React, { useState } from 'react';
import { FiPhoneCall, FiVideo, FiSun } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../../features/chat/ChatSlice';
import ThemeToggler from '../../theme/ThemeToggler';

const Header = () => {
  const dispatch = useDispatch();
  const [showThemeToggler, setShowThemeToggler] = useState(false);

  const handleThemeIconClick = () => {
    setShowThemeToggler((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between p-4 shadow border-b border-gray-300 relative">
      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full"
          onClick={() => dispatch(toggleSidebar())}
        >
          ☰
        </button>
        <div className="h-10 w-10 rounded-full "></div>
        <div>
          <h2 className="text-lg font-semibold">Contact Name</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="p-2 rounded-full text-xl text-gray-600">
          Skip
        </button>
        <button className="p-2 rounded-full">
          <FiPhoneCall className="text-xl text-gray-600" />
        </button>
        <button
          className="p-2 rounded-full relative"
          onClick={handleThemeIconClick}
        >
          <FiSun className="text-xl text-gray-600" />
        </button>
        {showThemeToggler && (
          <div className="absolute top-full right-0 mt-2">
            <ThemeToggler />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;