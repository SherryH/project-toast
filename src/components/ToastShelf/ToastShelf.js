import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { stack } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {stack.length > 0 &&
        stack.map(({ variant, message, id }) => (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} id={id}>
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
