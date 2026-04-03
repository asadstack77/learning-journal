interface Props {
  title: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  cartItemCount: boolean;
}
const Button = ({
  title,
  color = "primary",
  onClick,
  cartItemCount,
}: Props) => {
  return (
    <div>
      {cartItemCount && (
        <button onClick={onClick} className={"btn mx-2 btn-" + color}>
          {title}
        </button>
      )}
    </div>
  );
};

export default Button;
