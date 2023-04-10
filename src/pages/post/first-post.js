/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\pages\post\first-post.js
 * Project: demo-nextjs
 * Author: Lokavit
 * Created Date: 2023-04-09 3:35:13
 * -----
 * Last Modified: 2023-04-09 7:20:54
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 *
 */
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export async function author_info() {
  console.log("?");
  const res = await fetch(`https://api.github.com/users/Lokavit`);
  const result = await res.json();

  return { props: { result } };
}

export default function FirstPost({ props }) {
  return (
    <Layout>
      {/* 给当前页面定义自己的title */}
      <Head>
        <title>First Post</title>
      </Head>
      {/* 还可以添加js文件，似乎可以用在唯有当前页所需js的按需加载
       * strategy="lazyOnload":在浏览器空闲时加载
       */}
      {/* <Script
        src="https://lokavit.github.io/notes/src/js/count.js"
        strategy="lazyOnload"
        onLoad={() => console.log("first post:script loaded")}
      /> */}
      <h1>Fiest Post! {props}</h1>
      {/* 过于友好，连alt没写也要提示 */}
      <Image src="/bg.png" height={350} width={100} alt="monk" />
      <Link href="/">Back Index</Link>
    </Layout>
  );
}
