// import { useState } from "react";
// import Like from "../Like";

// interface Props {
//   cartItems: string[];
//   heading: string;
//   onRemove: (index: number) => void;
// }
// const CartItems = ({ cartItems, heading, onRemove }: Props) => {
//   const [selectedItem, setSelectedItem] = useState(0);
//   const handleClick = (index: number) => {
//     setSelectedItem(index);
//   };
//   return (
//     <>
//       <h1 className="my-3">{heading}</h1>
//       <ul className="list-group mb-3">
//         {cartItems.map((item, index) => (
//           <li
//             key={index}
//             className='list-group-item d-flex justify-content-between'
//             onClick={() => handleClick(index)}
//           >
//             {item}
//             <div>
//               <Like  />
//               <button
//                 onClick={() => onRemove(index)}
//                 className="btn btn-outline-danger mx-3"
//                 style={{ border: "1px solid red" }}
//               >
//                 Remove
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default CartItems;
