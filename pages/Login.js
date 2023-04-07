import React, {useState} from "react";
import styles from "./Login.module.css";
import { useRouter } from 'next/router';

export default function Login() {
    const [imageSrc, setImageSrc] = useState(null);
    const [name, setName] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const router = useRouter();

    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = function(event) {
          setImageSrc(event.target.result);
        };
    
        reader.readAsDataURL(file);
      }

      const handlePuzzlePage = () => {
        router.push({
            pathname: '/Puzzle',
            query: { photo: imageSrc,
                        name: name
        }
        }, '/Puzzle');
      }

    return (
        <div className={styles.body}>
            <div  className={styles.box}>
                <div id="logo" className={styles.logo}>
                    <img src='logo.png' border='0' alt='logo2' id="logo"></img>
                </div>
                <form style={{left:"74px"}} className={styles.inputgroup}>
                    <h3 className={styles.header3}>KARE PUZZLE OYUNU</h3>
                    <input  type="text" placeholder="ADINIZ" className={styles.inputfield} value={name} onChange={e => handleNameChange(e)} required></input>
                    {/* <div className={styles.buttonwrapper}>
                        <span className={styles.label}>Dosya Seç</span>
                        <input className={styles.upload}  type="file"  onChange={handleImageUpload}></input>
                    </div> */}
                    <input  type="file"  onChange={handleImageUpload}></input>

                    <a onClick={handlePuzzlePage} className={styles.btn}>BAŞLA</a>
                </form>
            </div>
        </div>
    );
}