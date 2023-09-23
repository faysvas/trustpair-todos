import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Auth from '@/components/Auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todos',
  description: 'Todo list',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:w-[768px] m-auto flex flex-col gap-8 ">
          <header className="flex justify-between bg-blue-600 items-center p-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white">
              Todos
            </h1>
            <Auth />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
