import React from 'react';

export function useKeyDown(key, callback) {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === key) {
        callback(e);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [key, callback]);
}
