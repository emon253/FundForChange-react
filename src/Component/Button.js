import classes from "../styles/Button.module.css";

export default function Button({ className, children, ...rest }) {
  return (
    <div className={classes.btn}>
      <button className={`${classes.button} ${className}`} {...rest}>
        {children}
      </button>
    </div>
  );
}
