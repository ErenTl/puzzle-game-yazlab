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

  useEffect(() => {
    if(firstClick!=-1 && secondClick!=-1) {
        console.log("GİRDİM EFFECT");
        const newTiles = [...tiles];
        var firstTile = tiles[firstClick];
        var secondTile = tiles[secondClick];
        newTiles[firstClick] = secondTile;
        newTiles[secondClick] = firstTile;

        setTiles(newTiles);

        // checkSolved(tiles);
    }
  }, [firstClick, secondClick])

  const handleTileClick = async (index) => {
    console.log("index: " + index);
    
    console.log("firstClick: " + firstClick);
    console.log("secondClick: " + secondClick);

    if(JSON.stringify(tiles[index]) === JSON.stringify(originalTiles[index])) {
      alert("Bu kare zaten doğru yerinde");
    }else{
      if(firstClick==-1) {
          await setFirstClick(index);
      }else {
          await setSecondClick(index);
          // checkSolved(tiles);
      }
      await console.log("firstClick: " + firstClick);
      await console.log("secondClick: " + secondClick);
      if(firstClick!=-1 && secondClick!=-1) {
          console.log("GİRDİM");
          await setFirstClick(index);
          await setSecondClick(-1);
      }
    }

    

  };

  return (
    <div className="">

      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`puzzle-tile ${JSON.stringify(tile) === JSON.stringify(originalTiles[index]) ? "solved" : "unsolved"}`}
          onClick={() => handleTileClick(index)}
          style={{ backgroundImage: `url(${tile})` }}> 
        </div>
      ))}
      {solved && (
        <div className="puzzle-solved-overlay">
          <h6>Congratulations! You solved the puzzle!</h6>
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
