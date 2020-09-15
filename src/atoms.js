import { atom } from "recoil";

export const userState = atom({
  key: 'users',
  default: [],
})

export const view = atom({
  key: "view",
  default: "users",
});