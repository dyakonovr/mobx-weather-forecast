import converstionInputStore from '../../../store/converstionInputStore';
import classes from './CustomInput.module.css'
import { observer } from 'mobx-react-lite';
import { forwardRef } from 'react';

const CustomInput = forwardRef(({ type, id, placeholder, labelText }, ref) => {
  return (
    <div className={classes.field}>
      <input type={type} className={classes.input} ref={ref}
        placeholder={placeholder} name={id} id={id} value={converstionInputStore.value}
        required onChange={(e) => { converstionInputStore.handleInputType(e.nativeEvent.data) }} />
      <label htmlFor={id} className={classes.label}>{labelText}</label>
    </div>
  );
});

export default observer(CustomInput);