import "./Form.css";
import { useState } from "react";
import Popup from "./Popup";
import { InputsFormContext } from "./Contexts/InputsFormContext";
import InputsParentComponent from "./InputsParentComponent";
import { useContext } from "react";
import { UserContext } from "./Contexts/UserContext";

export default function Form() {
  const userData = useContext(UserContext);
  const [formInputs, setFormInputs] = useState({
    name: userData.name,
    phonenumber: "",
    age: "",
    checkbox: false,
    salary: "",
  });

  const [popup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const btnIsDisabled =
    formInputs.name === "" ||
    formInputs.age === "" ||
    formInputs.phonenumber === "";

  function handleChangeInputName(value) {
    setFormInputs({ ...formInputs, name: value });
  }
  function handleChangeInputPhone(value) {
    setFormInputs({ ...formInputs, phonenumber: value });
  }
  function handleChangeInputAge(value) {
    setFormInputs({ ...formInputs, age: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formInputs.age < 18 || formInputs.age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (
      formInputs.phonenumber.length < 10 ||
      formInputs.phonenumber.length > 12
    ) {
      setErrorMessage("The phoneNumber is incorrect");
    } else {
      setErrorMessage(null);
    }
    setShowPopup(true);
  }

  return (
    <div
      className="form-container"
      onClick={() => {
        if (popup) {
          setShowPopup(false);
        }
      }}
    >
      <h1 style={{ color: "white" }}>Welcome : {userData.name}</h1>
      <form>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <InputsFormContext.Provider
          value={{
            value: formInputs.name,
            handleChange: handleChangeInputName,
            label: "Name :",
          }}
        >
          <InputsParentComponent />
        </InputsFormContext.Provider>

        <InputsFormContext.Provider
          value={{
            value: formInputs.phonenumber,
            handleChange: handleChangeInputPhone,
            label: "Phone number :",
          }}
        >
          <InputsParentComponent />
        </InputsFormContext.Provider>

        <InputsFormContext.Provider
          value={{
            value: formInputs.age,
            handleChange: handleChangeInputAge,
            label: "Age :",
          }}
        >
          <InputsParentComponent />
        </InputsFormContext.Provider>

        <label style={{ marginTop: "30px" }}>Are you an employee ?</label>
        <input
          type="checkbox"
          style={{ marginBottom: "15px" }}
          checked={formInputs.checkbox}
          onChange={(e) => {
            setFormInputs({ ...formInputs, checkbox: e.target.checked });
          }}
        />

        <label>Salary: </label>
        <select
          value={formInputs.salary}
          onChange={(e) => {
            setFormInputs({ ...formInputs, salary: e.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>Between 500$ and 200$</option>
          <option>More than 500$</option>
        </select>

        <button
          disabled={btnIsDisabled}
          className={btnIsDisabled ? "disabled" : ""}
          id="sub-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <Popup isVisible={popup} errorMessage={errorMessage} />
    </div>
  );
}
