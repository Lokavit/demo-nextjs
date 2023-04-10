/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\pages\api\test-info.js
 * Project: demo-nextjs
 * Author: Lokavit
 * Created Date: 2023-04-09 8:09:39
 * -----
 * Last Modified: 2023-04-09 8:12:38
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 * 调试Fetch
 */

const testInfoAPI = async () => {
  const res = await fetch(`https://api.github.com/users/Lokavit`);
  const result = await res.json();
  console.log("result:", result);
};

export default testInfoAPI;
