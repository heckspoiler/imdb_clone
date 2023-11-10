import React from 'react';
import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between max-w-6xl mx-2 sm:mx-auto items-center py-6">
      <nav className="flex mx-10">
        <MenuItem title="HOME" address="/" Icon={HomeIcon} />

        <MenuItem title="ABOUT" address="/about" Icon={InfoIcon} />
      </nav>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl ">
            <span className="font-bold bg-lime-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}
