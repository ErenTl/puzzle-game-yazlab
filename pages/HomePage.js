import React from "react";
import Puzzle from "./Puzzle";
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function HomePage() {

    const router = useRouter();

    

      const handlePuzzlePage = () => {
        router.push({
          pathname: '/Puzzle',
          query: { photo: "./logo.png" }
        },'/Puzzle');
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

                    <a  onClick={handlePuzzlePage}>Go to Puzzle Page</a>
                <a onClick={handleScoreboardPage}>SKOR TABLOSU</a>
            </fieldset>
        </section>
        </>
    );
}
