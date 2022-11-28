import { getEmail, isUserHasPreferences, URL } from "./util";

export const validateAuthUrl = () => getEmail() ? isUserHasPreferences() ? null : URL.setting : URL.login;
export const isUserLogin = () => getEmail() ? true : false;