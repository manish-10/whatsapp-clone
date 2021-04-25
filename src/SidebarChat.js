import { Avatar } from '@material-ui/core'
import {useState,useEffect} from 'react'
import './SidebarChat.css'
function SidebarChat({addNewChat}) {
    const [seed,setSeed]=useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat=()=>{
        const roomname=prompt("Please enter name for chat")
            if(roomname){
                console.log("hello")
            }
    }
    return !addNewChat?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ):(
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add new chat</h2>
        </div>
    )
        
}

export default SidebarChat
