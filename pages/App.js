import React, { useState } from "react";
import HomePage from "./HomePage";


function PuzzleGame() {
  const [imageSrc, setImageSrc] = useState(null);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      setImageSrc(event.target.result);
    };

    reader.readAsDataURL(file);
  }

  const boardStyle = {
    width: "600px",
    // height: "750px",
    // border: "2px solid #333",
    // overflow: "hidden",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
  };
  
  return (
    <div>
      {/* <input type="file" onChange={handleImageUpload} />
      <div style={boardStyle}>{imageSrc && <Puzzle imageSrc={imageSrc} />}</div> */}
      <HomePage />
    </div>
  );
}

export default PuzzleGame;
