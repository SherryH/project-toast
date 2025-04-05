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

  return (
    <ToastContext.Provider value={{ stack, addToast, removeToastFromStack }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
