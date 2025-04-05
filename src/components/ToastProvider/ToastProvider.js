import React from 'react';

export const ToastContext = React.createContext([]);

function ToastProvider({ children }) {
  const [stack, setStack] = React.useState([]);
  // stack: [{variant, message}, {variant, message}]

  const addToast = ({ variant, message }) => {
    setStack((stack) => {
      return [
        ...stack,
        { variant: variant, message: message, id: crypto.randomUUID() },
      ];
    });
  };

  const removeToastFromStack = (id) => {
    setStack((stack) => {
      return stack.filter((toast) => toast.id !== id);
    });
  };

  // To clear the stack when Esc is pressed
  // Not to live inside ToastShelf
  // Clearing the stack  == clearing the data, ToastProvider handles the data
  // ToastShelf handles the presentation, just keep it presentational
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setStack([]);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ stack, addToast, removeToastFromStack }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
