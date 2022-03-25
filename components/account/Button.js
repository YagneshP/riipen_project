const Button = ({ text, type, onToggle }) => {
  return (
    <button type={type} className="button-12" onClick={onToggle}>
      {text}
    </button>
  );
};

export default Button;
