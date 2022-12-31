import { useRef } from 'react';
import classes from './CustomSelect.module.css';

const CustomSelect = ({ values }) => {
  const listRef = useRef(null);
  const firstOptionRef = useRef(null);

  // Функции
  function handleMenuClick(currentTarget) {
    const list = listRef.current;

    if (list.dataset.opened === "false") { // Если меню закрыто
      list.dataset.opened = "true";
      list.classList.add('options_opened');
    }

    else { // Иначе, если меню открыто
      list.dataset.opened = "false";
      firstOptionRef.current.innerHTML = currentTarget.innerHTML;
    }


  }

  function generateOptionsList(values) {
    const array = [];
    array.push(<li className={[classes.option, classes.option_default].join(' ')} key={0} ref={firstOptionRef}>{values.defaultValue}</li>);

    for (let i = 0; i < values.optionsValues.length; i++) {
      array.push(<li className={classes.option} key={i + 1}>{values.optionsValues[i]}</li>);
    }

    return array;
  }
  // Функции END

  return (
    <ul className={classes.options} ref={listRef} data-opened={false} onClick={(e) => handleMenuClick(e.target)}>
      {generateOptionsList(values)}
    </ul>
  );
};

export default CustomSelect;