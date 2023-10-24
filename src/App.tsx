import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0);
  let items = [
    "KitchenAid Mixer not working",
    "Excellent Product in Mixer category",
    "Need help with setup",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <div>
          <ListGroup
            items={items}
            heading="Tickets"
            onSelectItem={handleSelectItem}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          Primary button count is {count}
        </button>
        <button className="btn btn-danger" onClick={() => setCount(0)}>
          Reset Count
        </button>
      </div>
    </>
  );
}

export default App;
