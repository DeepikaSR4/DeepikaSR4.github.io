import "./button.css";


const Button = ({ sym, color,handleClick }) => {
  return (
    <div
    onClick = {() => handleClick(sym)}
      className="button"
      style={{ backgroundColor: color }}
    
    >
      {sym}
    </div>
  );
};

export default Button;