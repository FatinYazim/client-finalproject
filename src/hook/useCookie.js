import { useState, useEffect } from 'react';

const useCookie = (cookieName, initialValue) => {
  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  };

  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}; path=/`;
  };

  const [value, setValue] = useState(() => {
    const cookieValue = getCookie(cookieName);
    return cookieValue !== '' ? cookieValue : initialValue;
  });

  useEffect(() => {
    setCookie(cookieName, value);
  }, [cookieName, value]);

  return [value, setValue];
};

export default useCookie;
