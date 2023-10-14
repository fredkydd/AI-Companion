import { UserButton } from '@clerk/nextjs';
export default function RootPage() {
  return (
    <>
      <main className="text-green-500 text-3xl m-3">
        <UserButton afterSignOutUrl="/" />
      </main>
    </>
  );
}
