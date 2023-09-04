import { useContext } from "react";
import { InputsFormContext } from "./Contexts/InputsFormContext";
import { UserContext } from "./Contexts/UserContext";
export default function Inputs() {
  const inputsContext = useContext(InputsFormContext);
  const userData = useContext(UserContext);
  return (
    <>
      <label>
        {userData.name} {inputsContext.label}{" "}
      </label>
      <input
        value={inputsContext.value}
        onChange={(e) => {
          inputsContext.handleChange(e.target.value);
        }}
      />
    </>
  );
}
