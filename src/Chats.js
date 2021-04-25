import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import './Chats.css'
function Chat() {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chatheader__info">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
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

                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className="chat__name ">
                        manish
                </span>
                HEy gus
                <span className="chat__timestamp">
                    3:52 PM
                </span>
            </p>

            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
