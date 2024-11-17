import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
  const [status, setStatus] = useState(false); 

  const toggle = () => {
    setStatus(!status);
    onClick(); 
  }

  if(status == true) return <AiFillHeart color= "#ff6b81" size={20} onClick={toggle}></AiFillHeart>;
  return <AiOutlineHeart size={20} onClick={toggle}></AiOutlineHeart>;
}

export default Like
