import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from "./Scoreboard.module.css";
import {getScoreboard} from "../data/scoreboard";
import { useEffect } from "react";
import { useState } from "react";


export default function Scoreboard() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getScoreboard()
        .then((data) => {
          setData(data);
          console.log(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
      }, []);

    return (
        <div className={styles.body}>
      <div id="box" className={styles.box}>
        <div id="logo" className={styles.logo}>
          <Image className={styles.img} src="/logo.png" alt="logo" width={400} height={400} />
        </div>
        <div className={styles.score} id="score">
          <h1 className={styles.header1}>SKOR TABLOSU</h1>
        </div>
        <div id="barra" className={styles.barra}></div>
        <div id="tops" className={styles.tops}>
        
        {!isLoading&!error? data.map((item,key) => {
            return(
                <p key={key+1} className={styles.p}>
            {key+1 + " " + item.name} <span>Hamle Sayısı: {item.moveCount} Skor: {item.score}</span>
          </p>
            );
        } )
      :"null"}




        </div>
        <div id="barra" className={styles.barra}></div>
       

        

</div>

    </div>

    );
}