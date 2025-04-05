import React from 'react';
import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const [stack, setStack] = React.useState([]);
  // stack: [{variant, message}, {variant, message}]

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleVariantChange = (e) => {
    setVariant(e.target.value);
  };

  const removeToastFromStack = (id) => {
    setStack((stack) => {
      return stack.filter((toast) => toast.id !== id);
    });
  };

  const popToast = (e) => {
    e.preventDefault();
    setStack((stack) => {
      return [
        ...stack,
        { variant: variant, message: message, id: crypto.randomUUID() },
      ];
    });
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <form onSubmit={popToast} className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>ToastShelf Playground</h1>
      </header>

      <ToastShelf stack={stack} removeToastFromStack={removeToastFromStack} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={handleMessageChange}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label htmlFor={`variant-${option}`} key={option}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={handleVariantChange}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
