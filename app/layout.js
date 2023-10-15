import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rentals Bureau',
  description:
    'App to control and prevent fraudulent transactions in the rental business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <Providers attribute="class">{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
