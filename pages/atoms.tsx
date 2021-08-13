import { atom } from "recoil";

// atomが状態を定義・保持
export const users = atom({
  key: "users",
  default: [],
});

export const posts = atom({
  key: "posts",
  default: [],
});
