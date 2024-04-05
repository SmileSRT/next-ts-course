import Link from 'next/link';

export default function Home() {
  return (
        <div>
          Главная

          <Link href={'/subjects'}>Предметы</Link>
        </div>
  );
}
