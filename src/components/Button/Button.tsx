import { ButtonType } from "../../types/Button/Button";

const Button = ({ children, className, onClick, disabled }: ButtonType) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${className} outline-none`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
