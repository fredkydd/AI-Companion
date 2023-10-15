import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <section className="flex items-center">
        <Menu className="block md:hidden" />
        <Link href="/" />
        <h1
          className={
            (cn('hidden md:block text-xl md:text-3xl font-bold text-green-500'),
            font.className)
          }
        >
          companion.ai
        </h1>
      </section>
      <section className="flex items-center gap-x-3">
        <UserButton afterSignOutUrl="/" />
      </section>
    </nav>
  );
}
