import classes from './Header.module.css'
import userData from '../../../store/userData';

function Header() {
  return (
    <div className={[classes.header, 'container'].join(' ')}>
      <img src={userData.values.avatarUrl} alt="Аватар" className={classes.avatar} />
      <strong className={classes.name}>{userData.values.name}</strong>
    </div>
  );
};

export default Header;