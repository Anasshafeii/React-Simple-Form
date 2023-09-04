import "./Form.css";
export default function Popup({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div className="popup-container">
        <div className="popup-content">
          <h1
            style={{
              textAlign: "center",
              color: errorMessage ? "red" : "green",
            }}
          >
            {errorMessage != null
              ? errorMessage
              : "The form has been submited successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
