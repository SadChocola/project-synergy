import styles from './style.module.css'

const ChatBlock = (props) => {
    return (
        <div className={styles.chat}>
            <div className={styles.chattxt}>Chat</div>
            <div className={styles.chatmessages}>
                {props.chatData.map((el, i) => {
                    return(
                        <div key={i}>
                            {i + 1}.{el}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatBlock