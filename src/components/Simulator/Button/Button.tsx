import React from 'react';

import styles from './Button.module.scss';

interface Text {
  text: string;
  onChange: any;
  checked: any;
}

const Button = ({ text, onChange, checked }: Text) => {
  return (
    <div className={styles.inputOption}>
      <div className={styles.radio}>
        <label>
          <input
            type="radio"
            onChange={onChange}
            value={text === 'FIXADO' ? 'ipca' : text.toLowerCase()}
            checked={checked}
          />
          <span>
            {(text === 'Liquido' ? 'Líquido' : text) &&
              (text === 'PRE' ? 'PRÉ' : text)}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Button;
