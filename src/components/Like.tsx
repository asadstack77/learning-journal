import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
const Like = () => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
  };
  return (
    <>
      {status ? (
        <FcLike onClick={toggle} size={30} />
      ) : (
        <FcLikePlaceholder onClick={toggle} size={30} />
      )}
    </>
  );
};

export default Like;
