import ListGroup from "./components/ListGroup";

function App() {
  
  const item = ["Ahsa", "Dammam", "Khobar", "Riyadh",'Jeddah'];

  return (
    // Fragments
    <>
      <h1>Hello World</h1>
      <ListGroup items={item} heading="List of cities" />
    </>
  );
}

export default App;
