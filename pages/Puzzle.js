import React, { useState, useEffect } from "react";

const PuzzleGame = ({ imageSrc }) => {
  const [tiles, setTiles] = useState([]);
  const [solved, setSolved] = useState(false);
  const [firstClick, setFirstClick] = useState(-1);
  const [secondClick, setSecondClick] = useState(-1);
  const [originalTiles, setOriginalTiles] = useState([]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const tileWidth = img.width / 4;
      const tileHeight = img.height / 4;
      const tilesArray = [];
      const originalTilesArray = [];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const canvas = document.createElement("canvas");
          canvas.width = tileWidth;
          canvas.height = tileHeight;
          const context = canvas.getContext("2d");
          context.drawImage(
            img,
            j * tileWidth,
            i * tileHeight,
            tileWidth,
            tileHeight,
            0,
            0,
            tileWidth,
            tileHeight
          );
          tilesArray.push(canvas.toDataURL());
          originalTilesArray.push(canvas.toDataURL());
        }
      }
      setOriginalTiles(originalTilesArray);


      shuffleTiles(tilesArray);
      setTiles(tilesArray);

      console.log("solved::" +  tiles.every((value, index) => JSON.stringify(value) === JSON.stringify(originalTiles[index])));
    };

    img.src = imageSrc;
  }, [imageSrc]);


  return (
    <div className="">

      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`puzzle-tile ${JSON.stringify(tile) === JSON.stringify(originalTiles[index]) ? "solved" : "unsolved"}`}
          style={{ backgroundImage: `url(${tile})` }}> 
        </div>
      ))}
      {solved && (
        <div className="puzzle-solved-overlay">
          <h6>Tebrikler! Puzzle'ı çözdünüz!</h6>
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
