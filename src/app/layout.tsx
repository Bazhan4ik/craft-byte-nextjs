"use client";

import './globals.css'
import { Nunito, Noto_Sans } from 'next/font/google';

import styles from "./header.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export const nunito = Nunito({ subsets: ['latin'], variable: "--font_default", style: ["normal", "italic"] });
export const natoSans = Noto_Sans({ subsets: ['latin'], variable: "--font_title", weight: ["800"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  useEffect(() => {
    const grid: HTMLDivElement | null = document.getElementsByClassName(`grid`).item(0) as HTMLDivElement;
    const body: HTMLBodyElement | null = document.getElementsByTagName(`body`).item(0) as HTMLBodyElement;

    const checkScrollbar = () => {
      const hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
      grid.style.left = hasScrollbar ? `-${Math.floor(getScrollbarWidth() / 2)}px` : '0px';

      const bodyStyles = getComputedStyle(body);

      if (hasScrollbar) {
        const padding = `calc(((100vw - var(--content-width)) / 2) - ${Math.ceil(getScrollbarWidth() / 2)}px)`

        body.style.paddingLeft = `${padding}`;
        body.style.paddingRight = `${padding}`;
      } else if (!hasScrollbar && bodyStyles.getPropertyValue("padding-left") != "448px") {
        body.style.paddingLeft = `calc((100vw - var(--content-width)) / 2)`;
        body.style.paddingRight = `calc((100vw - var(--content-width)) / 2)`;
      }



    };


    // Run the function on mount and on window resize
    checkScrollbar();
    window.addEventListener('resize', checkScrollbar);

    // Cleanup function
    return () => window.removeEventListener('resize', checkScrollbar);
  }, []);


  return (
    <html lang="en">
      <style jsx global>{`
                :root {
                    --font-default: ${nunito.style.fontFamily};
                    --font-title: ${natoSans.style.fontFamily};
                }
                body {
                    font-family: ${nunito.style.fontFamily}
                }
            `}</style>
      <body>

        <header className={styles.header}>

          <div className={styles.header_container}>
            <h1 className={styles.header_logo}>
              Craft<span>Byte</span>
            </h1>

            <div className={styles.header_links}>
              <a>Solutions</a>
              <a>Technologies</a>
              <a className={styles.header_links__contact}>
                Contact
                <Image src={"./chevron-forward-outline.svg"} width={30} height={30} alt="icon"></Image>
              </a>
            </div>
          </div>

        </header>

        <div className="grid">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>

        {children}
      </body>
    </html>
  )
}


function getNumFromPx(str: string) {
  return parseInt(str.replace("px", ""));
}
function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  (outer.style as unknown as any).msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
}