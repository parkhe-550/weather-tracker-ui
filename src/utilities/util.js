const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const URL = {
    base: "/",
    login: "/login",
    setting: "/settings"
};
export const isEmailAddress = (email) => EMAIL_REGEX.test(email);
export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getItem = (key) => {
    const obj = localStorage.getItem(key);
    return isValidItem(obj) ? JSON.parse(obj) : null;
};
const isValidItem = (obj)=> obj !== undefined && obj !== 'undefined' && obj !== null && obj !== 'null';
export const isUserHasPreferences = () => {
    const preference = getItem("USER_PREFERENCE");
    return (preference? true : false)
};
export const getPreferences = () => (isUserHasPreferences() ? getItem("USER_PREFERENCE") : null);
export const getEmail = () => getItem("EMAIL");
