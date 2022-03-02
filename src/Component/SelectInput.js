import classes from "../styles/SelectInput.module.css";

export default function SelectInput({ name, val, ...rest }) {
  return (
    <div className={classes.textInput}>
      <select {...rest}>
        <option>{name}</option>
        {val.map((e) => {
          return (
            <option id={e.id} value={e.name} key={parseInt(e.id)}>
              {e.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
