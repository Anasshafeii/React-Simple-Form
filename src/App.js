import "./App.css";
import Form from "./Form";
import { UserContext } from "./Contexts/UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{
        userName: "@test",
        email: "Anas@gmail.com",
        name: "Anas",
      }}
    >
      <div className="App">
        <Form />
      </div>
    </UserContext.Provider>
  );
}

export default App;
