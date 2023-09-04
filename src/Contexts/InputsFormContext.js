import { createContext } from "react";

export let InputsFormContext = createContext({
  label: "",
  handleChange: null,
  value: null,
});
