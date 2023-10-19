'use client';

import { cn } from '@/lib/utils';
import { Home, Plus, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const routes = [
      {
        icon: Home,
        href: '/',
        label: 'Home',
        protection: false,
      },
      {
        icon: Plus,
        href: '/companion/new',
        label: 'New',
        protection: true,
      },
      {
        icon: Settings,
        href: '/settings',
        label: 'Settings',
        protection: false,
      },
    ],
    pathname = usePathname(),
    router = useRouter(),
    onNavigate = (url: string, protection: boolean) => router.push(url);

  return (
    <aside className="space-y-4 flex flex-col h-full text-white bg-secondary">
      <section className="p-3 flex flex-1 justify-center">
        <section className="space-y-2">
          {routes.map((route) => (
            <section
              onClick={() => onNavigate(route.href, route.protection)}
              key={route.href}
              className={cn(
                'text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer, hover:text-purple-500 hover:bg-primary/10 rounded-lg transition',
                pathname === route.href && 'bg-primary/10 text-primary'
              )}
            >
              <section className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </section>
            </section>
          ))}
        </section>
      </section>
    </aside>
  );
}
