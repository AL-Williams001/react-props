import "./App.css";

import List from "./components/List";

function App() {
  return (
    <div className="container">
      <List items={["Apples", "Mangoes", "Oranges", "Pineapples"]} />
    </div>
  );
}

export default App;
