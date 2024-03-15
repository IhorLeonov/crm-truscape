import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center pt-3 h-screen">
        <h1 className="text-xl">Home page</h1>
        <Link className="text-blue-600 hover:text-black" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </main>
  );
}
