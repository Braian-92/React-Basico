import { useState } from "react";

interface Props { // interface es una estructura de datos que define el tipo de los datos que se van a pasar a la funcion
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //! Hook estado
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function

  const [name, setName] = useState("");

  if (items.length === 0) {
    return (
      <>
        <h1>ListGroup</h1>
        <p>No items found</p>
      </>
    );
  }

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  }
  
  return ( 
    <>
      <h1>ListGroup</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => setSelectedIndex(index)}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;