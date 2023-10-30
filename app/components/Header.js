'use client';
import Link from 'next/link';
import { Providers } from '../providers';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  return (
    <Providers attribute="class">
      <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
        {/* Dynamic Logo */}
        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
        {/* Menu */}
        <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
          <Link href="#Dashboard" className="hover:text-accentCyan">
            Dashboard
          </Link>
          <Link href="#Sign in" className="hover:text-accentCyan">
            Sign in
          </Link>
          <ThemeSwitcher />
        </div>
      </header>
    </Providers>
  );
};
