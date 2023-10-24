import { useState } from "react";
import { useLocalStorage } from '../../hook/useLocalStorage'
import ChatBlock from './chat-block'
import Comment from './comment'

const Chat = () => {
    const [chatData, setChatData] = useLocalStorage('CHAT', [])
    const [inputValue, setInputValue] = useState('')
    const [showDialogReg, setShowDialogReg] = useState(false)
    const [user] = useLocalStorage('USER')

    const changeChat = () => {
        if (user) {
            if (inputValue === "") {
                alert("Please, enter a message")
            } else {
                setChatData([...chatData, `${user ? user: 'Anonim'}:${(inputValue)}`])
                setInputValue('')
            }
        } else {
            setShowDialogReg(true)
            setInputValue('')
        }
    }

    return (
        <div>
            <ChatBlock chatData={chatData}/>
            <Comment
                inputValue={inputValue}
                setInputValue={setInputValue}
                changeChat={changeChat}
                setChatData={setChatData}
                showDialogReg={showDialogReg}
            />
        </div>
    )
}

export default Chat