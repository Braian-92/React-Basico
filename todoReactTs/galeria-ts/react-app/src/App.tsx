import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
// @ts-ignore
import BootswatchSwitcher from './components/BootswatchSwitcher';

function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let items2 = ["New York 2", "San Francisco 2", "Tokyo 2", "London 2", "Paris 2"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div className="container my-2">
    <BootswatchSwitcher defaultTheme="vapor" /> {/* defaultTheme es el tema que se va a usar por defecto */}  
    <Alert>
      <span>Alerta personalizada</span>
    </Alert>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    {/* <ListGroup items={items2} heading="Cities 2" onSelectItem={handleSelectItem} /> */}
  </div>;
}

export default App;