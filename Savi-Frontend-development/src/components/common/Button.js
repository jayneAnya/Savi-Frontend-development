import Spinner from "react-bootstrap/Spinner";
import "../../assets/scss/button.scss";
import Button from "react-bootstrap/Button";

export const ButtonComp = ({
  label,
  width,
  type,
  onClick,
  isLoading,
  ...otherProps
}) => (
  <Button
    className={type ? `button${type}` : "button"}
    onClick={onClick}
    {...otherProps}
    style={{
      width: width,
      backgroundColor: "#b5179e",
      border: "none",
      borderRadius: "8px",
      _hover: { backgroundColor: "#d374c5" },
    }}
  >
    {isLoading ? "Loading..." : label}
  </Button>
);

export default Button;
