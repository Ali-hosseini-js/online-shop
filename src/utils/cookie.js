const setCookie = (token) => {
  document.cookie = `token=${token}; max-age=${1 * 24 * 60 * 60}`;
};

const getCookie = () => {
  const cookie = document.cookie;
  return cookie;
};

export { setCookie, getCookie };
