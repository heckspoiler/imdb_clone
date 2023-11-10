import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Prodivers from '@/app/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is a IMDb Clone Website',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Prodivers>
          <Header />
          {children}
        </Prodivers>
      </body>
    </html>
  );
}
