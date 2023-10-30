import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

function Dashboard() {
  return (
    <>
      {/* Header Container  */}
      <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
        {/* Dynamic Logo */}
        <Link
          className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat block h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"
          href="/"
          passHref={true}
        ></Link>
        {/* Menu */}
        <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
          <Link
            href="#Dashboard"
            className="text-slate-600 hover:text-accentOrange dark:text-slate-100"
          >
            Dashboard
          </Link>
          <Link
            href="#Sign in"
            className=" text-slate-600 hover:text-accentOrange dark:text-slate-100"
          >
            Sign in
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Heading Section */}
      <section id="heading" className="pt-12 bg-slate300 dark:bg-lightOrange">
        <div className="container mx-auto px-6 pb-32">
          <h1 className="text-5xl text-slate-500 text-center font-bold dark:text-slate-100">
            Dashboard
          </h1>
          <p className="text-3xl text-slate-400 text-center font-medium dark:text-slate-200">
            Subscription Status
          </p>
        </div>
      </section>

      {/* Table Section */}
      <section id="table" className="pt-12 bg-gray-50 dark:bg-lightRed">
        {/* Table Container */}
        <div className="container mx-auto px-6 pb-32">
          <table className="border-collapse border border-slate-400 ...">
            <thead>
              <tr>
                <th className="border border-slate-300 ...">State</th>
                <th className="border border-slate-300 ...">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 ...">Indiana</td>
                <td className="border border-slate-300 ...">Indianapolis</td>
              </tr>
              <tr>
                <td className="border border-slate-300 ...">Ohio</td>
                <td className="border border-slate-300 ...">Columbus</td>
              </tr>
              <tr>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Detroit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
