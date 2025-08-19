function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items.map(item => <li className="list-group-item">{item}</li>);
  return ( 
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;