import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { stack } = React.useContext(ToastContext);
  // instead of passing and simply call removeToast(id) here
  // we just pass id down and let Toast calling removeToast within itself
  // we can change the <Toast removeToast /> to <Toast id />
  // it makes more sense in terms of props API design

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
