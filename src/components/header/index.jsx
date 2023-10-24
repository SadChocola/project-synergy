import { Link } from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link className={styles.navel} to='/'>Home Page</Link>
                <Link className={styles.navel} to='/chat'>Chat</Link>
                <Link className={styles.navel} to='/test'>Test API</Link>
            </nav>
        </div>
    )
}

export default Header