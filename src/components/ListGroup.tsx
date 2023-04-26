// import {MouseEvent} from 'react'
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items,heading}: Props) {
  // let selectedIndex = 0;

  // Hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // if (cities.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No Cities are avaialable</p>
  //     </>
  //   );

  //Event Handler
  // const handleClick = (event) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>No Cities are avaialable</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
