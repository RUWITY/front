import { atom } from "recoil";

export const userProfileState = atom<any>({
  key: "userProfile",
  default: {
    nickname: "",
    explanation: "",
    todayLink: "",
  },
});

export const imgFileState = atom<any>({
  key: "imgFile",
  default: null,
});
