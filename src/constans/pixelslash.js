export const url = process.env.DEVELOPMENT ? 'http://localhost/' : 'http://pixelslash.xaa.pl/';
export const path = process.env.DEVELOPMENT ? 'pixelslash/' : 'new/';
export const getStats = `${path}api/stats.php`;
export const attack = `${path}api/attack.php`;
