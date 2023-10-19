export default function RootPage() {
  const text = '{children}';

  return (
    <main className="text-green-500 text-3xl m-3 h-full flex justify-center">
      <h1>
        <strong> {text}</strong>
      </h1>
    </main>
  );
}
