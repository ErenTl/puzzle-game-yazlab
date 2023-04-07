import React, { useState, useEffect } from "react";
import styles from './Tile.module.css';

const PuzzleGame = ({ imageSrc, userName }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstClick, secondClick])

  useEffect(() => {
    checkSolved();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [tiles])


  const shuffleTiles = (tilesArray) => {
    console.log(tilesArray);
    for (let i = tilesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      console.log("j: " + j);
      [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
    }
  };

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

  const checkSolved = () => {



    if(tiles.every((value, index) => JSON.stringify(value) === JSON.stringify(originalTiles[index]))) {
      setSolved(true);
    }else {
      setSolved(false);
    }
  };

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
      <p>İyi oyunlar {userName} </p>
      <div style={boardStyle} className="">
        
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={styles.puzzletile + " " + (JSON.stringify(tile) === JSON.stringify(originalTiles[index]) ? styles.solved : "")}
            onClick={() => handleTileClick(index)}
            style={{ backgroundImage: `url(${tile})` }}> 
          </div>
        ))}
        {solved && (
          <div className="puzzle-solved-overlay">
            <h6>Tebrikler! Puzzle ı çözdünüz!</h6>
          </div>
        )}
      </div>
    </div>
  );
};

PuzzleGame.getInitialProps = async ({ query }) => {
  const imageSrc = query.photo;
  const userName = query.name;
  return { imageSrc, userName };
};


export default PuzzleGame;
