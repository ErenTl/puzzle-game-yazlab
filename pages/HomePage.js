import React from "react";
import Puzzle from "./Puzzle";
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function HomePage() {

    const router = useRouter();

    

      const handleLoginPage = () => {
        router.push({
          pathname: '/Login'
        });
      }

      const handleScoreboardPage = () => {
        router.push({
          pathname: '/Scoreboard'
        });
      }

    return (
        <>
        <div id="logo">
            <img src='logo.png' alt='logo'/>
        </div>
        <section id="botones">
            <fieldset id="bot">
                {/* <a href="/Puzzle">KARE PUZZLE OYUNU</a> */}
                {/* <Link href={{ pathname: '/Puzzle', state: { photo: "./logo.png" } }}>
                </Link> */}

                    <a  onClick={handleLoginPage}>Puzzle Oyununa Git!</a>
                <a onClick={handleScoreboardPage}>SKOR TABLOSU</a>
            </fieldset>
        </section>
        </>
    );
}
