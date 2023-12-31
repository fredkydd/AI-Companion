import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full">
      <Navbar />
      <section className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </section>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </section>
  );
}
