export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input  type="checkbox" {...rest} /> <span  style={{fontSize:"1.2rem"}}>{text}</span>
    </label>
  );
}
