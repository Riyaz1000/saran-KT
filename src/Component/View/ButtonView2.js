import React, { useRef, useEffect } from "react";

function ButtonView2() {
  const buttonRef = useRef(null);
  const selectRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.style.display = "block";
  };

  const handleYesClick = () => {
    selectRef.current.style.display = "block";
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const yesButton = buttonRef.current;
      const dropDown = selectRef.current;

      const clickedButtonRef = buttonRef.current.contains(event.target);
      const clickedselectRef = selectRef.current.contains(event.target);
      console.log(selectRef.current);

      if (!clickedButtonRef && !clickedselectRef) {
        yesButton.style.display = "none";
        dropDown.style.display = "none";
      } else if (clickedButtonRef && !clickedselectRef) {
        dropDown.style.display = "none";
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "green",
            borderRadius: "2px",
            border: "none",
            padding: "5px",
            color: "white",
          }}
        >
          click me
        </button>
      </div>

      <div>
        <button
          ref={buttonRef}
          onClick={handleYesClick}
          style={{
            backgroundColor: "black",
            borderRadius: "2px",
            border: "none",
            marginTop: "5px",
            padding: "5px",
            color: "white",
            marginLeft: "730px",
            display: "none",
          }}
        >
          yes!
        </button>
      </div>

      <div>
        <select
          ref={selectRef}
          style={{
            backgroundColor: "indigo",
            color: "white",
            marginLeft: "730px",
            marginTop: "4px",
            padding: "3px",
            display: "none",
          }}
        >
          <option>--select--</option>
          <option>click-1</option>
          <option>click-2</option>
          <option>click-3</option>
        </select>
      </div>
    </div>
  );
}

export default ButtonView2;
