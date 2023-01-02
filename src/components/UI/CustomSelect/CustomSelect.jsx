import { useRef, forwardRef } from 'react';
import classes from './CustomSelect.module.css';

const CustomSelect = forwardRef(({ valuesArr }, ref) => {
  const firstOptionRef = useRef(null);

  // Функции
  function handleMenuClick(currentTarget) {
    const list = ref.current;

    if (list.dataset.opened === "false") { // Если меню закрыто
      list.dataset.opened = "true";
      list.classList.add('options_opened');
    }

    else { // Иначе, если меню открыто
      list.dataset.opened = "false";
      firstOptionRef.current.innerHTML = currentTarget.innerHTML; // Меняю значение у списка
      list.dataset.card = currentTarget.dataset.card; // Сохраняю текущий номер карты
    }
  }

  function generateOptionsList(valuesArr) {
    const array = [];
    array.push(<li className={[classes.option, classes.option_default, "main-hover-animation"].join(' ')} key={0}
      ref={firstOptionRef}>{valuesArr.defaultValue}</li>);

    for (let i = 0; i < valuesArr.optionsValues.length; i++) {
      array.push(<li className={[classes.option, "main-hover-animation"].join(' ')} key={i + 1}
        data-card={valuesArr.optionsValues[i].card}>{valuesArr.optionsValues[i].text}</li>);
    }

    return array;
  }
  // Функции END

  return (
    <ul className={classes.options} ref={ref} data-opened={false} onClick={(e) => handleMenuClick(e.target)}>
      {generateOptionsList(valuesArr)}
    </ul>
  );
});

export default CustomSelect;