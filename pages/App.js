import React, { useState } from "react";


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



  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
}

export default PuzzleGame;
