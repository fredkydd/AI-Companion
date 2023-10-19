'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Sparkles } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import MobileSidebar from './mobile-sidebar';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    <nav className="fixed w-full h-16 z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <section className="flex items-center">
        {/* <Menu className="block md:hidden" /> */}
        <MobileSidebar />
        <Link href="/">
          <h1
            className={
              (cn(
                'hidden md:block text-xl md:text-3xl font-bold text-green-500'
              ),
              font.className)
            }
          >
            companion.ai
          </h1>
        </Link>
      </section>
      <section className="flex items-center gap-x-3">
        <Button variant="illusion" size="sm" className="rounded-md">
          {'  '}
          Upgrade{' '}
          <Sparkles className="h-4 w-4 fill-white text-yellow-500 ml-2" />
          {'  '}
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </section>
    </nav>
  );
}
