import classes from "../styles/TextArea.module.css";

export default function TextArea({ icon, ...rest }) {
  return (
    <div className={classes.textInput}>
      <textarea {...rest} />
    </div>
  );
}
