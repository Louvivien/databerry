// copilot
// https://app.databerry-one.vercel.app => databerry-one.vercel.app
export const getRootDomain = (url: string) => {
  const domain = url.split('/')[2];
  const parts = domain.split('.');
  return parts.slice(parts.length - 2).join('.');
};

export const getProtocol = (url: string) => {
  return new URL(url).protocol;
};

export default getRootDomain;
