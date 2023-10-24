import { useState } from "react";
import { useLocalStorage } from '../../hook/useLocalStorage'
import styles from './style.module.css'

const Home = () => {
    const [user, setUser] = useLocalStorage('USER', '')
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            {user &&(
                <div className={styles.container}>
                    <h1 className={styles.txt}>Welcome back, {user}</h1>
                    <button className={styles.btn} onClick={() => setUser('')}>Logout</button>
                </div>
            )}
            {!user &&(
                <div className={styles.container}>
                    <h1 className={styles.txt}> Enter your name </h1>
                    <input className={styles.inp} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className={styles.btn} onClick={() => setUser(inputValue)}>Login</button>
                </div>
            )}
        </div>
    )
}

export default Home