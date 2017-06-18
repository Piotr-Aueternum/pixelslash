export const url = process.env.URL;
export const path = process.env.NODE_ENV === 'production' ? 'new/' : 'pixelslash/';
export const getStats = `${path}api/stats.php`;
export const attack = `${path}api/attack.php`;
export const register = `${path}api/register.php`;
export const login = `${path}api/login.php`;
export const logout = `${path}api/logout.php`;
export const logged = `${path}api/logged.php`;
