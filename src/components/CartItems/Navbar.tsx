interface Props {
  cartItemsCount: number;
}
const Navbar = ({ cartItemsCount }: Props) => {
  const navItems = ["Home", "Courses", "About"];
  return (
    <>
      <div className="border border-1 mt-1 mx-2 px-2 rounded">
        <ul className=" p-0 d-flex justify-content-between mt-2">
          {navItems.map((item) => (
            <li className="list-unstyled" key={item}>
              {item}
            </li>
          ))}
          <span style={{ color: "dodgerblue" }}>Items: {cartItemsCount}</span>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
