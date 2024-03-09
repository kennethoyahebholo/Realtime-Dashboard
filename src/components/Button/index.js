import ButtonStyle from "./Button.module.scss";

const Button = ({
  className,
  onPress,
  title,
  isLoading,
  disabled,
  type,
  color,
  width,
  borderRadius,
  fontSize,
  height,
  textAlign,
  padding,
  fontWeight,
  icon,
  cursor,
  backgroundColor,
  border,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onPress}
      disabled={isLoading || disabled}
      className={
        color === "secondary"
          ? `${ButtonStyle.secbtn} ${className}`
          : `${ButtonStyle.btn} ${className}`
      }
      {...props}
      style={{
        width,
        borderRadius,
        fontSize,
        height,
        textAlign,
        padding,
        fontWeight,
        cursor,
        color,
        backgroundColor,
        border,
      }}
    >
      {isLoading ? "Loading..." : title}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
