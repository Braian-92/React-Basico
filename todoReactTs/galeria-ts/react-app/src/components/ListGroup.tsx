import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];

  const message = items.length === 0 ? <p>No items found</p> : null;

  if (items.length === 0) {
    return (
      <>
        <h1>ListGroup</h1>
        <p>No items found</p>
      </>
    );
  }

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  }

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  }
  
  return ( 
    <>
      <h1>ListGroup</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => <li className="list-group-item active" key={item} onClick={handleClick}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;