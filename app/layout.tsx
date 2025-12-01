import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  variable: '--font-atkinson',
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Dark Mode Toggle",
  description: "Dark light toggle for Next.js themeprovider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={atkinson.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

