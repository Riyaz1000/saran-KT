import  { useState } from "react";

function ButtonView() {

  const [showButton , setShowButton]=  useState(false)

  const handleClick = () =>{

    setShowButton(true)
  }

  const handleOnBlur = () =>{

  setShowButton(false)

}


  return (
    <div>
      <p
        style={{
          color: "black",
          textAlign: "center",
          marginTop: "120px",
          fontFamily: "sans-serif",
          fontSize: "20px",
        }}
      >
        Button view
      </p>

      <div style={{ textAlign: "center" }}  >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{ height: "30px", cursor: "pointer" }}
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>



      {showButton && <button onBlur={handleOnBlur} autoFocus style={{

      padding: "3px 5px",
      marginLeft : "710px",
      backgroundColor: "#4CAF50",
      color: "white",
      cursor: "pointer",
      border : "none",
      borderRadius : "2px"
      
    }}>

    Click Me
  </button>}


    </div>
  );
}

export default ButtonView;
