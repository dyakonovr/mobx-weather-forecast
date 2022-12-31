import converstionInputStore from '../../../store/converstionInputStore';
import classes from './CustomInput.module.css'
import { observer } from 'mobx-react-lite';

const CustomInput = observer(({ type, id, placeholder, labelText }) => {
  return (
    <div className={classes.field}>
      <input type={type} className={classes.input}
        placeholder={placeholder} name={id} id={id} value={converstionInputStore.value}
        required onChange={(e) => { converstionInputStore.handleInputType(e.nativeEvent.data) }} />
      <label htmlFor={id} className={classes.label}>{labelText}</label>
    </div>
  );
})

export default CustomInput;