import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Post Next.js App</h1>
      <Link href="/posts">
        <p>View Posts</p>
      </Link>
    </div>
  );
}