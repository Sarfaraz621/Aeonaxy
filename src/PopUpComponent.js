import React from "react";
import { PopupWidget } from "react-calendly";

function PopUpComponent() {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/sarfarazahmad9488/sarfaraz-react-project"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
}

export default PopUpComponent;
