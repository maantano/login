import { atom } from "recoil";
import { UserCredential } from "firebase/auth";

export const LoginState = atom<UserCredential | null>({
  key: "LoginState",
  default: null,
});

export const isLogged = atom({
  key: "isLogged",
  default: false,
});
