import styles from './style.module.css'
import { Link } from 'react-router-dom'

const Comment = (props) => {
    return(
        <div className={styles.wrapper}>
            <label>Enter Message</label>
            <input className={styles.wrapperinput} value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)}/>
            <div>
                <button className={styles.wrapperbtn} onClick={props.changeChat}>Send</button>
                <button className={styles.wrapperbtn} onClick={() => props.setChatData([])}>Delete</button>
            </div>

            {props.showDialogReg && (
                <div className={styles.nopermtxt}>
                    Chatting is not allowed for unauthorised users, go to <Link className={styles.nopermlink} to='/'>Home Page</Link> to login
                </div>
            )}
        </div>
    )
}

export default Comment