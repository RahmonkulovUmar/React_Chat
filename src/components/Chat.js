import { useEffect, useState } from "react"
import {collection, addDoc, serverTimestamp, query, where, onSnapshot, orderBy} from 'firebase/firestore'
import {db, auth} from '../firebase-config'
import "./styles/Chat.css"


    export const Chat = (props) => {

            const {room} = props

        const [newMessage, setNewMessage] = useState("")
        const messageRef = collection(db, "messages")
        const [messages, setMessages] = useState([])

        useEffect( () => {
            const queryMessages = query(messageRef, where("room", "==", room), orderBy("createdAt"))
            onSnapshot(queryMessages, (snapshot) => {
               let messages = [];
               snapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
               })
               console.log(messages)
               setMessages(messages)
            })
        })

        const handleSubmit = async(e) => {
            e.preventDefault()
            if(newMessage === "") return;

            await addDoc(messageRef, {
                text: newMessage,
                createdAt: serverTimestamp(),
                user: auth.currentUser.displayName,
                room
            })
            setNewMessage("")
        }

        return <div className="chat-app">

            <div className="messages">
                {messages.map((message)=>
                    <div className="message" key={message.id}>
                        <span className="user">{message.user}</span>
                        {message.text}
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="new-message-form">
                <input className="new-meassage-input" placeholder="Type your message here..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
                />
                <button type="submit" className="send-button">Send </button>
            </form>
        </div>
        
    } 