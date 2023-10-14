import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default async function Home() {
  return (
    <>
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
      {/** Hero Section */}
      <section
        id="hero"
        className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
      >
        {/** Hero Container */}
        <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
          <Image
            src="/images/illustration-intro.png"
            priority
            width={470}
            height={349}
            alt=""
            className="mx-auto"
          />
          <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95">
            Get Started
          </button>
        </div>
      </section>
      {/** Features Section */}
      <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
        {/** Features Container */}
        <div className="container mx-auto px-6 pb-32">
          {/** First Row */}
          <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
            {/** Item 1 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center mb-6 h-24">
                <Image
                  src="/images/icon-access-anywhere.svg"
                  alt=""
                  width={83}
                  height={78}
                />
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/** Item 2 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center mb-6 h-24">
                <Image
                  src="/images/icon-security.svg"
                  alt=""
                  width={70}
                  height={88}
                />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>

          {/** Second Row */}
          <div className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
            {/** Item 3 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center mb-6 h-24">
                <Image
                  src="images/icon-collaboration.svg"
                  alt=""
                  width={86}
                  height={71}
                />
              </div>
              <h3 className="text-xl font-bold">
                Access your file from anywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/** Item 4 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center mb-6 h-24">
                <Image
                  src="/images/icon-any-file.svg"
                  alt=""
                  width={91}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/** Productive Section */}
      <section id="productive" className="bg-white dark:bg-darkBlue">
        {/** Productive Container */}
        <div className="flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
          {/** Image */}
          <div className="md:w-1/2">
            <Image
              src="/images/illustration-stay-productive.png"
              alt=""
              className="mb-10"
              width={584}
              height={442}
            />
          </div>
          {/** Content */}
          <div className="flex flex-col items-start md:w-1/2">
            <div className="flex flex-col space-y-5">
              <h4 className="max-w-md text-xl font-bold md:text-4xl">
                Stay productive, wherever you are
              </h4>
              <p className="text-md md:text-lg">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="text-md md:text-lg">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
              </p>
            </div>

            {/** Link */}
            <div>
              <Link
                href="#"
                className="border-b border-accentCyan text-accentCyan"
              >
                See how Rentals Bureau works
                <Image
                  src="/images/icon-arrow.svg"
                  alt=""
                  className="inline pb-2"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/** Testimonial Section */}
      <section id="testimonial" className="bg-gray-50 dark:bg-darkBlue">
        {/** Testimonial Container */}
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          {/** Boxes Container */}
          <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md: space-x-12">
            {/** Quotes Image */}
            <Image
              src="/images/bg-quotes.png"
              alt=""
              className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
              width={80}
              height={65}
            />

            {/** Box-1 */}
            <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue md:w-1/3">
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/** Customer Info */}
              <div className="flex space-x-4">
                <Image
                  src="/images/profile-1.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <h5 className="text-sm font-semibold">Satish Patel</h5>
                  <p className="text-xs font-extralight">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/** Box-2 */}
            <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue md:w-1/3">
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/** Customer Info */}
              <div className="flex space-x-4">
                <Image
                  src="/images/profile-2.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                  <p className="text-xs font extralight">
                    Fouder & CEO. Huddle 2
                  </p>
                </div>
              </div>
            </div>
            {/** Box 3 */}
            <div className="flex flex-col p-10 space-y-6  rounded-lg bg-gray-100 dark:bg-darkBlue md:w-1/3">
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/** Customer Info */}
              <div className="flex space-x-4">
                <Image
                  src="/images/profile-3.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <h5 className="text-sm font-semibold">Eva Boyd</h5>
                  <p className="text-xs font-extralight">
                    Founder & CEO. Huddle 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Early Access Section */}
      <section
        id="early-access"
        className="relative px-6 dark:bg-darkBlue2 md:px-0"
      >
        <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gary-200 dark:bg-darkBlue1 md:px-16">
          <h5 className="text-2xl font-bold">Get early access today</h5>
          <p className="text-sm">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          {/** Input & Button Container */}
          <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="w-full md:flex-1">
              <input
                type="text"
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                placeholder="email@rentalsbureau.com"
              />
            </div>

            <button className="w-full p-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95">
              Get Started For Free
            </button>
          </div>
        </div>
      </section>
      {/** Footer */}
      <footer className="bg-darkBlue2 text-white">
        <div className="container mx-auto pt-12 px-5 pb-10">
          {/** flex Container for All Items */}
          <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
            {/** Email & Phone */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center space-x-3 md:-mt-10">
                <div className="w-6">
                  <Image
                    src="/images/icon-phone.svg"
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
                    src="/images/icon-email.svg"
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
                    src="/images/facebook.svg"
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
                    src="images/twitter.svg"
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
                    src="images/instagram.svg"
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
    </>
  );
}
