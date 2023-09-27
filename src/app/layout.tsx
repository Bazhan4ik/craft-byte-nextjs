"use client";

import Link from 'next/link';
import './globals.css'
import styles from "./header.module.css";
import { Nunito, Noto_Sans } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin'], variable: "--font_default", style: ["normal", "italic"] });
export const natoSans = Noto_Sans({ subsets: ['latin'], variable: "--font_title", weight: ["800"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <style jsx global>{`
                :root {
                    --font_default: ${nunito.style.fontFamily};
                    --font_title: ${natoSans.style.fontFamily};
                }
                body {
                    font-family: ${nunito.style.fontFamily}
                }
            `}</style>
      <body>

        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>
              <Link href="/">
                <span className={styles.title_Craft}>Craft</span><span className={styles.title_Byte}>Byte</span>
              </Link>
            </h1>

            <h2 className={styles.subtitle}>
              Crafting the future of software
            </h2>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
