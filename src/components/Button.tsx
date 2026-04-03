interface Props {
  title: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ title, color = "primary", onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick} className={"btn btn-" + color}>
        {title}
      </button>
    </div>
  );
};

export default Button;
