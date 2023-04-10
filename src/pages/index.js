import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import testInfoAPI from "./api/test-info";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <h1>DEMO!</h1>
        <Link href="/post/first-post">FirstPost</Link>
        <Link href="/post/about">About</Link>
        <nav>
          {" "}
          NAV 这是个列表
          <ul>
            <li>{/* <a onClick={testInfoAPI}>Fetch A标签</a> */}</li>
          </ul>
          <ul>
            <li>
              <button onClick={testInfoAPI} data-id="`${}`">
                Fetch Btn
              </button>
            </li>
            <li>
              <button onClick={testInfoAPI}>Fetch Btn</button>
            </li>
            <li>
              <button onClick={testInfoAPI}>Fetch Btn</button>
            </li>
          </ul>
        </nav>
      </section>
    </Layout>
  );
}
