import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto pt-12 px-5 pb-10">
        {/** flex Container for All Items */}
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/** Email & Phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <Image
                  src="../images/icon-phone.svg"
                  width={18}
                  height={18}
                  alt=""
                  className="scale-10"
                />
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <Image
                  src="../images/icon-email.svg"
                  width={20}
                  height={16}
                  alt=""
                  className="scale-10"
                />
              </div>
              <div>example@rb.com</div>
            </div>
          </div>

          {/** Menus */}
          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <Link href="#">About</Link>
              <Link href="#">Jobs</Link>
              <Link href="#">Press</Link>
              <Link href="#">Blog</Link>
            </div>
            <div className="flex flex-col space-y-3">
              <Link href="#">Contact Us</Link>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
            </div>
          </div>

          {/** Social */}
          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <Link href="#">
                <Image
                  src="../images/facebook.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="p-2 bg-darkBlue rounded-full ficon"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="../images/twitter.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="p-2 bg-darkBlue rounded-full ficon"
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="../images/instagram.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="p-2 bg-darkBlue rounded-full ficon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
