import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ stack, removeToastFromStack }) {
  return (
    <ol className={styles.wrapper}>
      {stack.length > 0 &&
        stack.map(({ variant, message, id }) => (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} onClose={() => removeToastFromStack(id)}>
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
