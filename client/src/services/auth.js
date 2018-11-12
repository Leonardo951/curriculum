export const TOKEN_KEY = "@resume-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
    return true;
};
export const registerValidator = token => {
    localStorage.setItem(TOKEN_KEY, token);
    return true;
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};