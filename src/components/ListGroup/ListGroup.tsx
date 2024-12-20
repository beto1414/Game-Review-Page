import { useState } from "react";
import "./ListGroup.module.css";
// import styled from 'styled-components'; 


// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// interface ListItemProps {
//   active: boolean;
// }
  
// const ListItem = styled.li<ListItemProps>`
//   padding: 5px 0; 
//   background: ${ props => props.active ? 'blue' : 'none'};
// `


interface Props {
  item: string[];
  heading: string;
  onSelectItem: (Item: string) => void; 
}


function ListGroup({ item, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  
  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p>no item found</p>}
      <ul className="list-none p-0">
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
