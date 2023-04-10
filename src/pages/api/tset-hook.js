/**
 * =====<< 卍 · Copyright · 卍 >>=====
 *
 * File: \src\pages\api\tset-hook.js
 * Project: demo-nextjs
 * Author: Lokavit
 * Created Date: 2023-04-09 8:58:40
 * -----
 * Last Modified: 2023-04-09 9:00:41
 * -----
 * Copyright © 1911 - 2023 Lokavit
 *
 *     卍 · 小僧過境　衆生甦醒 · 卍
 *
 * =====<< 卍 · Description · 卍 >>=====
 * 复习Reactjs的Hooks
 */

import {
  useCallback,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useReducer,
  useState,
} from "react";

/**
 * useCallback 重新渲染之前缓存函数定义
 */
const cachefn = useCallback(fn, dependncies);
