import React from 'react';

export function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
}
