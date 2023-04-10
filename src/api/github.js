/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\api\github.js
 * Project: demo-nextjs
 * Author: Lokavit
 * Created Date: 2023-04-09 9:17:21
 * -----
 * Last Modified: 2023-04-10 7:32:00
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 * github 相关API 请求
 */

/** github API */
const Basic_URL = `https://api.github.com`;

/** users相关 */
const User_URL = `${Basic_URL}/users/`;

/**
 * 根据传入名，返回该user的数据
 * @param {*} data
 * @returns
 */
export async function getGithubUserInfo(data) {
  const res = await fetch(`${User_URL}${data}`);
  return res.json();
}

export async function getGithubCommit(data) {}
