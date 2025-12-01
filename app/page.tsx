"use client"

import { DarkLightToggle } from "./components/DarkLightToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-gray-100 dark:bg-gray-700 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center w-full sm:items-start sm:text-left">
          This is a toggle button for light/dark mode in Next.js

          <div className="w-full flex">
              <DarkLightToggle/>
          </div>

          Enjoy
        </div>
      </main>
    </div>
  );
}
