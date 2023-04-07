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
{/* 
        {data.map((item) => {
            <p className={styles.p}>
            {item.name} <span>{item.score}</span>
          </p>
        } )} */}

          {/* <p className={styles.p}>
            MERT GÖKYAR <span>31</span>
          </p>
          <p className={styles.p}>
            BERRA OĞUZ<span>60</span>
          </p>
          <p className={styles.p}>
            EREN TORUN<span>100</span>
          </p>
          <p className={styles.p}>
            EREN TORUN<span>100</span>
          </p>
          <p className={styles.p}>
            EREN TORUN<span>100</span>
          </p> */}
          
        </div>
        <div id="barra" className={styles.barra}></div>
        {/* <div id="btn" className={styles.btn}>
          <a href="#" >
            DETAYLAR
          </a>
        </div> */}
        <div id="atras" className={styles.atras} data-tooltip="GERİ">
          <a href="#">
            {/* <Image src="/geri.png" alt="GERİ" width={50} height={50} /> */}
            <img src="./geri.png" alt='GERİ'></img>
          </a>
        </div>

        {/* <div id="box2">
  <div id="logo2">
    <img src='logo.png'/>
  </div>
  <div id="container">
    <div id="categoria1">
      <h1>CULTURA Y ARTE</h1>
      <div id="barracat"></div>
      <p>ACIERTOS: <scan>6</scan></p>
      <p>RESPONDIDAS: <scan>80</scan></p>
      <p>PROMEDIO: <scan>25</scan></p>
    </div>
    <div id="categoria1">
      <h1>HISTORIA</h1>
      <div id="barracat"></div>
      <p>ACIERTOS: <scan>6</scan></p>
      <p>RESPONDIDAS: <scan>80</scan></p>
      <p>PROMEDIO: <scan>25</scan></p>
    </div>
    <div id="categoria1">
      <h1>DEPORTE</h1>
      <div id="barracat"></div>
      <p>ACIERTOS: <scan>6</scan></p>
      <p>RESPONDIDAS: <scan>80</scan></p>
      <p>PROMEDIO: <scan>25</scan></p>
    </div>
    <div id="categoria1">
      <h1>GEOGRAFIA</h1>
      <div id="barracat"></div>
      <p>ACIERTOS: <scan>6</scan></p>
      <p>RESPONDIDAS: <scan>80</scan></p>
      <p>PROMEDIO: <scan>25</scan></p>
    </div>
    <div id="categoria1">
      <h1>ECONOMIA</h1>
      <div id="barracat"></div>
      <p>ACIERTOS: <scan>6</scan></p>
      <p>RESPONDIDAS: <scan>80</scan></p>
      <p>PROMEDIO: <scan>25</scan></p>
    </div>
    <div id="categoria1">
      <h1>CIENCIA Y EDUCACION</h1>
      <div id="barracat"></div>
      <p>ACIERTOS: <scan>6</scan></p>
      <p>RESPONDIDAS: <scan>80</scan></p>
      <p>PROMEDIO: <scan>25</scan></p>
    </div>
    <div id="categoria1">
      <h1>ENTRETENIMIENTO</h1>
      <div id="barracat"></div>
      <p>ACIERTOS: <scan>6</scan></p>
      <p>RESPONDIDAS: <scan>80</scan></p>
      <p>PROMEDIO: <scan>25</scan></p>
    </div>
  </div>
  <div id="atras" data-tooltip="GERİ">
    <a href="#"><img src='geri.png' alt='GERİ'/></a>
  </div>
</div> */}

</div>

    </div>

    );
}