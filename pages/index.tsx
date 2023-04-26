import Image from 'next/image';
import { Inter } from 'next/font/google';
import Game from '@/components/Game';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-24 px-2 bg-gray-900">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-evenly font-mono text-sm">
        <p className="fixed font-extrabold font-serif text-2xl left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-5 pt-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Zgadnij wyraz
        </p>

        <Game />
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
          className="font-mono font-bold mt-20"
        >
          * Kliknij tutaj żeby zobaczyć orginalną wersję gry.
        </a>
      </div>
    </main>
  );
}
