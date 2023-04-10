/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\pages\post\about.js
 * Project: demo-nextjs
 * Author: Lokavit
 * Created Date: 2023-04-09 7:37:21
 * -----
 * Last Modified: 2023-04-10 7:35:37
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 *
 */

import { useState, useEffect } from "react";
import { githubGetUserInfo } from "/GIT/lib-js/src/api_github";

// 测试lib-js
import { sum } from "/GIT/lib-js/src/sum";
// 组合
import { doubleSum } from "/GIT/lib-js/src/test";

export default function About() {
  // 状态及初始值
  const [username, setUserName] = useState("Lokavit");
  const [bio, setBio] = useState("buddhism");

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    let ignore = false; //

    async function fetchData() {
      setBio(null);
      const result = await getGithubUserInfo(username);
      if (!ignore) setBio(result.bio);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [username]);

  return (
    <>
      <select
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      >
        <option value="Lokavit">Lokavit</option>
        <option value="a">a</option>
        <option value="b">b</option>
      </select>
      <hr />
      <h3>{bio ?? "Loading^"}</h3>
      <h1>{sum(10, 5)}</h1>
      <hr />
      <input
        value={val1}
        type="number"
        onChange={(e) => setVal1(parseInt(e.target.value))}
      ></input>
      <input
        value={val2}
        type="number"
        onChange={(e) => setVal2(parseInt(e.target.value))}
      ></input>
      <h3>Calculation Result:{parseInt(sum(val1, val2))}</h3>
      <hr />
      <h5>Double Sum Result:{parseInt(doubleSum(val1, val2))}</h5>
    </>
  );
}

/**
 *
 * @returns 返回API请求回来的数据
 */
// async function getInfo() {
//   const res = await fetch(`https://api.github.com/users/Lokavit`);
//   const result = await res.json();
//   console.log("result?", result);
//   return result;
// }

// function About({ users }) {
//   const [userData, setUserData] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/Lokavit`)
//       .then((res) => res.json())
//       .then((data) => setUserData(data));
//   }, []);

//   return (
//     <>
//       <h1>Fetch:{userData.name}</h1>
//       <h1>Fetch:{userData.bio}</h1>
//       {/* <h1>Fetch:{console.log("??", users)}</h1> */}
//     </>
//   );
// }

// /**
//  *  undefined
//  * @param {*} param0
//  * @returns
//  */
// export async function getServerSideProps({ res }) {
//   console.log("Logging : " + res);
//   const data = await fetch("https://api.github.com/users/Lokavit");
//   const users = await data.json();
//   return { props: { users } };
// }

// export default About;
