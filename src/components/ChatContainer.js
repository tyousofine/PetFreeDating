import React from 'react'
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'


function ChatContainer() {
    return (
        <div className='chat-container'>
            <ChatHeader />

            <div>
                <button className='option'>Matches</button>
                <button className='option'>Chat</button>
            </div>

            <MatchesDisplay />
            <ChatDisplay />

        </div>
    )
}

export default ChatContainer
