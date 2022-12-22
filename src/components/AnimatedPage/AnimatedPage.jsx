import classes from "./AnimatedPage.module.css";

const AnimationPage = ({ children, notFullScreen }) => {

  return (
    <div className={notFullScreen ? [classes.animation, classes.animation_with_offsets].join(' ') : classes.animation}>
      {children}
    </div>
  );
};

export default AnimationPage;