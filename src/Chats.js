import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chats.css'
import { useParams } from 'react-router';
import db from './firebase';
import firebase from 'firebase'
import { useStateValue } from './StateProvider';
function Chat() {
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('')
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [{user},dispatch] = useStateValue()

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => {
                setRoomName(snapshot.data().name)
            })

            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc")
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc=>doc.data())))
                };
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input,user.displayName)

        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('')

    }


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chatheader__info">
                    <h3>{roomName}</h3>
                    <p>Last seen {" "}
                       {new Date(messages[messages.length-1]?.timestamp?.toDate()).toLocaleString()}
                    </p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${user.displayName === message.name && 'chat__reciever'}`}>
                        <span className="chat__name ">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toLocaleString()}
                        </span>
                    </p>

                ))}



            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} />

                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
