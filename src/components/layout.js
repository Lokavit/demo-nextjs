/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\components\layout.js
 * Project: demo-nextjs
 * Author: Lokavit
 * Created Date: 2023-04-09 4:10:35
 * -----
 * Last Modified: 2023-04-09 4:40:32
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 * Layout
 */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Lokavit";
export const siteTitle = "Demo Nextjjs";

export default function Layout({ children, home }) {
  // class出来的结果为:class="layout_container__hash值"
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="desc" content="Demo Nextjs!!" />
        {/* <meta property="og:image" content={``}/> */}
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/bg.png"
              className={utilStyles.borderCircle}
              height={150}
              width={150}
              alt="alt"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/bg.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
