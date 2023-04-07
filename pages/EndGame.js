import React from "react";
import styles from "./EndGame.module.css";
import { useRouter } from 'next/router';

const EndGame = ({ userName, moveCount, score }) => {

    const router = useRouter();

    const handleSaveScore = async() => {
        await fetch('/api/sendScore', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userName,
            score: score,
            movecount: moveCount
        }),
    }).then((response) => {
        return response.json();
    }).then((data, err) => {
        if(err){
            console.log(err);
        }else{
            alert(data[0].name + " skorunuz kaydedildi. Skorunuz: " + data[0].score + " Hamle Sayınız: " + data[0].moveCount);
            console.log(data);
        }
    });

    router.push({
        pathname: '/'
    });

    }

    const handlePlayAgain = () => {
        router.push({
            pathname: '/Login'
        });
    }

    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <div className={styles.box}>
                    <div className={styles.logo}>
                        <img src='logo.png' border='0' alt='logo2' id="logo"></img>
                    </div>
                    <div className={styles.score}>
                        <h1 className={styles.h1}>PUAN</h1>
                        <h2 className={styles.h2}>{score}</h2>
                    </div>
                    <div className={styles.estadisticas}>
                        <p>Hamle Sayısı: <scan>{moveCount}</scan></p>
                    </div>
                    <div className={styles.estadisticas}>
                        <p>Tebrikler <scan>{userName}</scan></p>
                    </div>
                    <div className={styles.btn}>
                        <button onClick={handleSaveScore} className={styles.button}>Skorumu Kaydet</button>
                    </div>
                    <div className={styles.btn}>
                        <button onClick={handlePlayAgain} className={styles.button}>Tekrar Oyna</button>
                    </div>
                </div>

            </div>

        </div>
    );
}


EndGame.getInitialProps = async ({ query }) => {
    const userName = query.userName;
    const moveCount = query.moveCount;
    const score = query.score;
    return { userName, moveCount, score };
  };

export default EndGame;