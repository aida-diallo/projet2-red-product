import cookie from "js-cookie";
import axios from "axios";
import { baseURL } from "./constant";


export const setCookie = (key, value) => {
    cookie.set(key, value, { expires: 1, secure: true, sameSite: "Strict" });
};

export const removeCookie = (key) => {
    cookie.remove(key);
};

export const getCookie = (key) => {
    return cookie.get(key);
};

export const setAuthentication = (token) => {
    setCookie("token", token);
};

export const logOut = () => {
    removeCookie("token");
};

const validateTokenWithServer = async (token) => {
    try {
        const res = await axios.post(`${baseURL}/auth`, { token });
        return res.data;
    } catch (error) {
        console.error("Erreur lors de la validation du token :", error);
        return false;
    }
};

export const isLogin = async () => {
    const token = getCookie("token");
    if (token) {
        return await validateTokenWithServer(token);
    }
    return false;
};
